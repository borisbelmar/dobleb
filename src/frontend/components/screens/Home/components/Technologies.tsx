import { Container } from '@/frontend/components/layouts'
import Image from 'next/image'
import ParallaxTilt from 'react-parallax-tilt'

interface Props {
  technologies: { img: string, name: string }[]
}

export default function Technologies({ technologies }: Props) {
  return (
    <section className="mb-24">
      <Container>
        <h2 className="text-center text-2xl md:text-4xl mb-2">
          Algunas de mis tecnologías favoritas
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Estas son algunas de las tecnologías que más me gustan y que uso en mis proyectos.
        </p>
        <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
          {technologies.map(({ img, name }) => (
            <li key={name} className="transition hover:scale-125">
              <ParallaxTilt className="bg-white shadow-xl rounded-md overflow-hidden">
                <Image src={img} alt={name} width={160} height={160} className="w-full object-cover" />
              </ParallaxTilt>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
