'use client'
import { ChakraProvider } from '@chakra-ui/react'


// components
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSectioon'
import FeaturesSection from '@/components/FeaturesSection'
import Testimonials from '@/components/Testimonials'
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <Testimonials />
          <GetInTouch />
          <Footer />
        {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
