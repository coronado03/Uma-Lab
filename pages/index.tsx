import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero/Hero'
import Help from '@/components/Help/Help'
import Problems from '@/components/Problems/Problems'
import Solutions from '@/components/Solutions/Solutions'
import Reasons from '@/components/Reasons/Reasons'
import Footer from '@/components/Footer'
import Qualities from '@/components/Qualities/Qualities'
import Contact from '@/components/Contact/Contact'
import Offer from '@/components/Offer/Offer'
import ChatBubble from '@/components/ChatBubble/ChatBubble'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Offer />
    <Reasons />
    <Contact />
    <Footer />
    <ChatBubble />
    </>
  )
}
