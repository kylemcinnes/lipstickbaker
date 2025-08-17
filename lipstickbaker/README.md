# Lipstick Baker Website

A production-ready Next.js website that mirrors lipstickbaker.com with modern design and functionality.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui components for consistent design
- **Contact Form**: Full-featured form with image uploads and validation
- **Instagram Integration**: Instagram Basic Display API with widget fallback
- **Email Notifications**: Resend API integration for form submissions
- **SEO Optimized**: Open Graph, sitemap, and robots.txt included

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Image Hosting**: Cloudinary (configurable)
- **Deployment**: Cloudflare Pages / Vercel ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd lipstickbaker
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp env.example .env.local
```

4. Configure your environment variables (see Environment Variables section)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with the following variables:

### Required
```bash
# Email Service
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL="Lipstick Baker <no-reply@lipstickbaker.com>"
TO_EMAIL="lipstickbaker@gmail.com"
```

### Instagram (Choose One Path)

#### Option 1: Basic Display API
```bash
INSTAGRAM_USER_ID=your_instagram_user_id
INSTAGRAM_APP_ID=your_instagram_app_id
INSTAGRAM_APP_SECRET=your_instagram_app_secret
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token
```

#### Option 2: Widget Embed (Fallback)
```bash
IG_WIDGET_EMBED="<iframe code from LightWidget or SnapWidget>"
```

### Cloudinary (Image Uploads)
```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_UNSIGNED_PRESET=your_unsigned_preset
```

## Instagram Setup

### Basic Display API (Recommended)

1. Create a Facebook Developer account
2. Create a new app
3. Add Instagram Basic Display product
4. Configure OAuth redirect URIs
5. Generate a long-lived access token
6. Add credentials to environment variables

### Widget Fallback

1. Visit [LightWidget](https://lightwidget.com/) or [SnapWidget](https://snapwidget.com/)
2. Create a widget for your Instagram account
3. Copy the iframe code
4. Add to `IG_WIDGET_EMBED` environment variable

## Image Setup

1. Replace placeholder images in `/public/images/` with your actual cake photos
2. Follow the naming convention in `/public/images/README.md`
3. Optimize images for web use (recommended: under 500KB each)

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Cloudflare Pages

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Add environment variables in Cloudflare dashboard
4. Set build command: `npm run build`
5. Set build output directory: `.next`
6. Deploy

## Project Structure

```
lipstickbaker/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── details/           # FAQ/Details page
│   ├── flavours/          # Flavours page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── ContactForm.tsx    # Contact form
│   ├── Footer.tsx         # Footer component
│   ├── GalleryMarquee.tsx # Gallery component
│   ├── Header.tsx         # Header component
│   ├── Hero.tsx           # Hero section
│   ├── ImageTiles.tsx     # Image tiles
│   └── InstagramGrid.tsx  # Instagram feed
├── lib/                    # Utility functions
├── public/                 # Static assets
│   └── images/            # Image assets
├── site.config.ts          # Site configuration
└── tailwind.config.ts      # Tailwind configuration
```

## Customization

### Colors
Update color scheme in `tailwind.config.ts` and `globals.css`

### Typography
Fonts are configured in `layout.tsx` and `globals.css`

### Content
Update text content in respective component files

### Styling
Modify Tailwind classes in component files

## Features

### Contact Form
- Form validation with Zod
- Image upload support
- Email notifications via Resend
- Responsive design

### Gallery
- Horizontal scrolling on desktop
- Grid layout on mobile
- Pause on hover functionality

### Instagram Integration
- Automatic post fetching
- Fallback to widget embed
- Responsive grid layout

### SEO
- Open Graph meta tags
- Sitemap generation
- Robots.txt
- Semantic HTML structure

## Performance

- Image optimization with Next.js
- Tailwind CSS purging
- Component lazy loading
- Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact the development team or create an issue in the repository.

## Changelog

### v1.0.0
- Initial release
- Complete website functionality
- Responsive design
- Contact form with validation
- Instagram integration
- SEO optimization
