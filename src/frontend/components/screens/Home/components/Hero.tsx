import Image from 'next/image'
import HeroDog from '@/frontend/assets/hero-dog.jpeg'
import { Container } from '@/frontend/components/layouts'

export default function Hero() {
  return (
    <section className="flex flex-col justify-center h-screen sm:h-[30rem] relative overflow-hidden text-white">
      <Container className="z-20 w-full text-center md:text-start">
        <h1 className="text-3xl lg:text-4xl font-bold">
          <span className="text-primary-500">MERN</span> Fullstack developer
        </h1>
        <h2 className="text-lg lg:text-xl text-gray-300">
          Experience the power of cutting-edge web solutions
        </h2>
      </Container>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-30 lg:bg-opacity-0" />
      <Image
        src={HeroDog}
        alt="Hero dog"
        className="absolute inset-0 z-0 object-cover object-right sm:object-right"
        placeholder="blur"
        fill
      />
    </section>
  )
}
