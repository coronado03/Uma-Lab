import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero/Hero'
import Help from '@/components/Help/Help'
import Problems from '@/components/Problems/Problems'
import Solutions from '@/components/Solutions/Solutions'
import Reasons from '@/components/Reasons/Reasons'
import Offer from '@/components/Offer/Offer'
import Footer from '@/components/Footer'
import Qualities from '@/components/Qualities/Qualities'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Help />
    <Problems />
    <Solutions />
    <Reasons />
    <Offer />
    <Qualities />
    <Footer />
    </>
  )
}
