import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero/Hero'
import Reasons from '@/components/Reasons/Reasons'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact/Contact'
import Offer from '@/components/Offer/Offer'
import ChatBubble from '@/components/ChatBubble/ChatBubble'
import FirstAbout from '@/components/AboutUs/FirstAbout'
import SecondAbout from '@/components/AboutUs/SecondAbout'
import ThirdAbout from '@/components/AboutUs/ThirdAbout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <FirstAbout />
    <SecondAbout />
    <ThirdAbout />
    </>
  )
}
