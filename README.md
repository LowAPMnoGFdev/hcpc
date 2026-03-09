# YourServices - Professional Business Services Website

A modern, responsive Next.js website for showcasing professional business services. Built with TypeScript, Tailwind CSS, and the Next.js 15 App Router.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Next.js 15 and React 19
- 📱 Mobile-friendly navigation
- 🎯 Multiple pages: Home, Services, About, Contact
- 💅 Styled with Tailwind CSS
- 🔒 TypeScript for type safety
- 📝 Contact form with validation

## Pages

### Home
- Hero section with call-to-action buttons
- Services overview with cards
- Call-to-action section

### Services
- Comprehensive list of 9 services
- Detailed service descriptions
- Grid layout for easy browsing

### About
- Company information
- Core values
- Why choose us section

### Contact
- Contact form
- Contact information
- Business hours

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

The dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    └── ServiceCard.tsx
```

## Customization

### Branding
- Update the company name "YourServices" in `src/components/Header.tsx`
- Update metadata in `src/app/layout.tsx`

### Contact Information
- Update contact details in `src/components/Footer.tsx`
- Update contact page information in `src/app/contact/page.tsx`

### Services
- Modify services in `src/app/services/page.tsx`
- Adjust service cards on homepage in `src/app/page.tsx`

### Colors
The default color scheme uses blue (blue-600). To change:
1. Search for `blue-600`, `blue-700`, etc. in the project
2. Replace with your preferred Tailwind color

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **ESLint** - Code linting

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is open source and available under the MIT License.
