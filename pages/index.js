import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from '../src/components/Link'
import Title from '../src/components/Title'
import Footer from '../src/components/Footer'
import HomeScreen from '../src/screens'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeScreen />
    </>
  )
}
