import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cinzel_Decorative } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { CartProvider } from '@/context/CartContext'
import Cart from '@/components/ordering/Cart'
import { useCart } from '@/context/CartContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Café Espresso | Premium Coffee Experience',
  description: 'Experience the finest coffee in a warm, inviting atmosphere. Order online or visit us today.',
}

function CartWrapper({ children }: { children: React.ReactNode }) {
  const { isCartOpen, setIsCartOpen } = useCart()
  return (
    <>
      {children}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

// Root layout with CartProvider and Cart component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${cinzel.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <CartWrapper>
              {children}
            </CartWrapper>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
