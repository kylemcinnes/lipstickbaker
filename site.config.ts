export const siteConfig = {
  name: "Lipstick Baker",
  description: "Handcrafted cakes with love",
  url: "https://lipstickbaker.com",
  ogImage: "https://lipstickbaker.com/og.jpg",
  links: {
    instagram: "https://www.instagram.com/lipstickbaker/",
  },
  contact: {
    email: "lipstickbaker@gmail.com",
  },
  instagram: {
    // Choose one implementation path
    useBasicDisplay: process.env.INSTAGRAM_ACCESS_TOKEN ? true : false,
    // Basic Display API
    userId: process.env.INSTAGRAM_USER_ID,
    appId: process.env.INSTAGRAM_APP_ID,
    appSecret: process.env.INSTAGRAM_APP_SECRET,
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
    // Widget fallback
    widgetEmbed: process.env.IG_WIDGET_EMBED,
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    unsignedPreset: process.env.CLOUDINARY_UNSIGNED_PRESET,
  },
  email: {
    resendApiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.FROM_EMAIL || "Lipstick Baker <no-reply@lipstickbaker.com>",
    toEmail: process.env.TO_EMAIL || "lipstickbaker@gmail.com",
  },
} as const;
