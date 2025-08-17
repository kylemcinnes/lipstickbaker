"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  eventDate: z.string().min(1, "Event date is required"),
  servings: z.number().min(10, "Minimum 10 servings required"),
  ideas: z.string().optional(),
  images: z.array(z.instanceof(File)).optional(),
  flavors: z.array(z.string()).optional(),
  dontKnowYet: z.boolean().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const flavorOptions = [
  "Strawberries + Cream",
  "Vanilla + Lemon",
  "Lemon + Raspberry",
  "Lemon + Blueberry",
  "Almond + Maple",
  "Red velvet",
  "Chocolate + Espresso",
  "Coconut + Vanilla",
  "Chocolate + Peanut",
  "Earl Grey + Honey",
  "Chocolate + Hazelnut",
  "Dulce De Leche",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [dontKnowYet, setDontKnowYet] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      servings: 10,
      ideas: "",
      images: [],
      flavors: [],
      dontKnowYet: false,
    },
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const imageFiles = files.filter(file => file.type.startsWith('image/'))
    
    if (uploadedImages.length + imageFiles.length > 10) {
      alert("Maximum 10 images allowed")
      return
    }

    setUploadedImages(prev => [...prev, ...imageFiles])
    form.setValue("images", [...uploadedImages, ...imageFiles])
  }

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index)
    setUploadedImages(newImages)
    form.setValue("images", newImages)
  }

  const handleFlavorChange = (flavor: string, checked: boolean) => {
    if (checked) {
      setSelectedFlavors(prev => [...prev, flavor])
    } else {
      setSelectedFlavors(prev => prev.filter(f => f !== flavor))
    }
  }

  const handleDontKnowYetChange = (checked: boolean) => {
    setDontKnowYet(checked)
    if (checked) {
      setSelectedFlavors([])
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Handle image uploads first
      let imageUrls: string[] = []
      
      if (uploadedImages.length > 0) {
        // For now, we'll use placeholder URLs
        // In production, this would upload to Cloudinary
        imageUrls = uploadedImages.map((_, index) => `https://example.com/placeholder-${index + 1}.jpg`)
      }

      const formData = {
        ...data,
        flavors: dontKnowYet ? [] : selectedFlavors,
        imageUrls,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      // Success - reset form
      form.reset()
      setUploadedImages([])
      setSelectedFlavors([])
      setDontKnowYet(false)
      
      alert("Thank you for your inquiry! We'll get back to you soon.")
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Thanks for inquiring!
            </h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Custom Cake Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Event Date */}
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Date *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Servings */}
                  <FormField
                    control={form.control}
                    name="servings"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How many people are you looking to feed? (minimum 10 servings) *</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="10" 
                            placeholder="10" 
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 10)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Ideas */}
                  <FormField
                    control={form.control}
                    name="ideas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Please share your ideas!</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your vision for the cake..." 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Image Upload */}
                  <FormItem>
                    <FormLabel>Upload one or more pictures of your cake inspiration!</FormLabel>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-sm text-gray-600 mb-2">
                          Click to upload images (max 10, up to 10MB each)
                        </p>
                        <p className="text-xs text-gray-500">
                          Supports: JPG, PNG, GIF, WebP
                        </p>
                      </label>
                    </div>
                    
                    {/* Display uploaded images */}
                    {uploadedImages.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                        {uploadedImages.map((file, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-sm">📷</span>
                                </div>
                                <p className="text-xs text-gray-600 truncate px-2">
                                  {file.name}
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </FormItem>

                  {/* Flavors */}
                  <FormItem>
                    <FormLabel>What flavor(s) would you like?</FormLabel>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="dont-know-yet"
                          checked={dontKnowYet}
                          onCheckedChange={handleDontKnowYetChange}
                        />
                        <label
                          htmlFor="dont-know-yet"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          It&apos;s okay if you don&apos;t know yet!
                        </label>
                      </div>
                      
                      {!dontKnowYet && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {flavorOptions.map((flavor) => (
                            <div key={flavor} className="flex items-center space-x-2">
                              <Checkbox
                                id={flavor}
                                checked={selectedFlavors.includes(flavor)}
                                onCheckedChange={(checked) => 
                                  handleFlavorChange(flavor, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={flavor}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {flavor}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FormItem>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  It&apos;s okay if you don&apos;t know yet! We can help you decide.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
