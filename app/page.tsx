import Image from 'next/image'
import Header from './components/Header'
import Body from './components/Body'
import Main from './components/Main'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="">
      <Body />
      <Main />
      <Footer />
      </div>
    </>
  )
}
