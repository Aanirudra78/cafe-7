# Café Espresso - Premium Coffee Website

A production-ready, premium cafe website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion. Features an advanced WhatsApp ordering system with cart functionality.

## Features

- 🎨 **Modern Design**: Beautiful gradients, patterns, and smooth animations
- 🌙 **Dark Mode**: Full dark mode support with localStorage persistence
- 📱 **Responsive**: Mobile-first design (320px → 1920px)
- 🛒 **WhatsApp Ordering**: Complete cart system with customer details form
- ⚡ **60fps Animations**: GPU-accelerated animations using Framer Motion
- 🎭 **Page Transitions**: Smooth fade transitions between routes
- 📝 **5 Complete Pages**: Home, Menu, About, Contact, Reservations

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3+ with custom design tokens
- **Animations**: Framer Motion v11+
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Fonts**: Next/font with Google Fonts (Inter + Playfair Display)
- **Theme**: next-themes for dark mode

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
cafe-website/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page
│   ├── menu/page.tsx           # Menu page with cart
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── reservations/page.tsx   # Reservations page
│   └── globals.css             # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky animated navbar
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── home/
│   │   ├── HeroSection.tsx     # Animated hero
│   │   ├── AboutPreview.tsx
│   │   ├── FeaturedMenu.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTASection.tsx
│   ├── ordering/
│   │   ├── Cart.tsx            # Cart panel
│   │   ├── CartButton.tsx      # Floating cart button
│   │   └── OrderModal.tsx      # WhatsApp order form
│   ├── ui/
│   │   ├── Button.tsx          # Gradient buttons
│   │   ├── Card.tsx            # Enhanced cards
│   │   ├── Input.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── DarkModeToggle.tsx
│   └── animations/
│       └── PageTransition.tsx
├── context/
│   └── CartContext.tsx         # Cart state management
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useMediaQuery.ts
│   └── useCart.ts
├── lib/
│   ├── animations.ts           # Framer Motion variants
│   ├── utils.ts                # Helper functions
│   └── data.ts                 # Menu items, testimonials
└── types/
    └── index.ts                # TypeScript interfaces
```

## WhatsApp Ordering System

The website includes a complete WhatsApp ordering system:

1. **Cart System**: Add/remove items, adjust quantities
2. **Floating Cart Button**: Shows item count, quick access
3. **Order Modal**: Collects customer details:
   - Name & phone number
   - Order type (Takeaway/Dine-in)
   - Table number (for dine-in)
   - Special requests
4. **WhatsApp Integration**: Formats order and opens WhatsApp

### Configure WhatsApp Number

Edit `lib/data.ts` and update the `whatsappNumber` variable:

```typescript
export const whatsappNumber = '1234567890' // Replace with your WhatsApp number
```

## Design System

### Colors

**Light Mode:**
- Primary: Espresso brown (#3E2723)
- Secondary: Cream (#F5F5DC)
- Accent: Golden orange (#D4A574)
- Background: Light beige (#FDF8F3)

**Dark Mode:**
- Primary: Dark brown (#1A1614)
- Secondary: Rich black (#0F0F0F)
- Accent: Golden orange (#D4A574)

### Typography

- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

### Gradients

- `gradient-coffee`: Coffee-themed gradient
- `gradient-warm`: Warm beige gradient
- Custom button gradients with hover effects

## Performance Optimizations

- Next/Image with blur placeholders
- Lazy loading below-fold images
- Code splitting with dynamic imports
- GPU-accelerated animations (transform, opacity)
- IntersectionObserver for scroll animations

## Browser Support

- Chrome/Edge/Safari/Firefox (last 2 versions)

## License

This project is for demonstration purposes.
