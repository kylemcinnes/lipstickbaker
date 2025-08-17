import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { siteConfig } from "@/site.config"

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  eventDate: z.string().min(1),
  servings: z.number().min(10),
  ideas: z.string().optional(),
  imageUrls: z.array(z.string()).optional(),
  flavors: z.array(z.string()).optional(),
  dontKnowYet: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Check if Resend API key is configured
    if (!siteConfig.email.resendApiKey) {
      console.error("Resend API key not configured")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    // Prepare email content
    const emailSubject = `New Custom Cake Inquiry — ${validatedData.name} — ${validatedData.eventDate}`
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Cake Inquiry</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .images { margin-top: 15px; }
            .image-thumb { display: inline-block; margin: 5px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎂 New Custom Cake Inquiry</h2>
              <p>A new inquiry has been submitted through the website.</p>
            </div>
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${validatedData.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${validatedData.email}</div>
            </div>
            
            ${validatedData.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${validatedData.phone}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Event Date:</div>
              <div class="value">${validatedData.eventDate}</div>
            </div>
            
            <div class="field">
              <div class="label">Number of Servings:</div>
              <div class="value">${validatedData.servings}</div>
            </div>
            
            ${validatedData.ideas ? `
            <div class="field">
              <div class="label">Ideas & Vision:</div>
              <div class="value">${validatedData.ideas}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Flavors:</div>
              <div class="value">
                ${validatedData.dontKnowYet ? 'Customer is unsure and would like help deciding' : 
                  validatedData.flavors && validatedData.flavors.length > 0 ? 
                    validatedData.flavors.join(', ') : 'No flavors selected'}
              </div>
            </div>
            
            ${validatedData.imageUrls && validatedData.imageUrls.length > 0 ? `
            <div class="field">
              <div class="label">Inspiration Images:</div>
              <div class="images">
                ${validatedData.imageUrls.map(url => `
                  <div class="image-thumb">
                    <a href="${url}" target="_blank">View Image</a>
                  </div>
                `).join('')}
              </div>
            </div>
            ` : ''}
            
            <div class="footer">
              <p>This inquiry was submitted from the Lipstick Baker website.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${siteConfig.email.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: siteConfig.email.fromEmail,
        to: siteConfig.email.toEmail,
        subject: emailSubject,
        html: emailHtml,
        reply_to: validatedData.email,
      }),
    })

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json()
      console.error("Resend API error:", errorData)
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
