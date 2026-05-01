import LoadingScreen from '@/components/ui/LoadingScreen'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/home/HeroSection'
import AboutPreview from '@/components/home/AboutPreview'
import FeaturedMenu from '@/components/home/FeaturedMenu'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/layout/Footer'
import CartButton from '@/components/ordering/CartButton'
import PageTransition from '@/components/animations/PageTransition'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <PageTransition>
        <Navbar />
        <main>
          <HeroSection />
          <AboutPreview />
          <FeaturedMenu />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
        <CartButton />
      </PageTransition>
    </>
  )
}
