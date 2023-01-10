import { Inter } from '@next/font/google'
import HomeScreen from '../src/screens'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <HomeScreen />
    </>
  )
}
