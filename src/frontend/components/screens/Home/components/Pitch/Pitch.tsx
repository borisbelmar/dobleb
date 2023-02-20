/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { Container } from '@/frontend/components/layouts'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import GithubIcon from './icons/Github'
import LinkedInIcon from './icons/LinkedIn'
import YoutubeIcon from './icons/Youtube'

const PITCH_TEXT = 'I help build innovative and optimized web solutions using **Javascript** technologies. With a focus on seamless **user experiences** and **peak performance**. *I bring digital dreams to life.*'

export default function Pitch() {
  return (
    <Container className="text-center py-32 text-lg sm:text-2xl flex flex-col justify-center items-center">
      <div className="mb-4 rounded-full relative overflow-hidden border-4 border-primary-500 shadow-xl">
        <Image
          src="https://res.cloudinary.com/dobleb/image/upload/v1676871575/doblebcl/boris-belmar.jpg"
          alt="Boris Belmar"
          width={96}
          height={96}
        />
      </div>
      <div>
        <h1 className="text-xl sm:text-2xl font-light text-dark-primary-800 dark:text-primary-50">
          Boris Belmar
        </h1>
        <p className="text-gray-800 dark:text-gray-300 mb-8 text-lg">
          Full Stack Developer / UI Designer / Marketer
        </p>
      </div>
      <ReactMarkdown>
        {PITCH_TEXT}
      </ReactMarkdown>
      <ul className="flex justify-center gap-6 mt-8">
        <a href="https://github.com/borisbelmar" target="_blank" rel="noreferrer" className="transition hover:text-primary-500">
          <li className="w-12 h-12">
            <GithubIcon />
          </li>
        </a>
        <a href="https://linkedin.com/in/bbelmar" target="_blank" rel="noreferrer" className="transition hover:text-primary-500">
          <li className="w-12 h-12">
            <LinkedInIcon />
          </li>
        </a>
        <a href="https://youtube.com/@doblebcl" target="_blank" rel="noreferrer" className="transition hover:text-primary-500">
          <li className="w-12 h-12">
            <YoutubeIcon />
          </li>
        </a>
      </ul>
    </Container>
  )
}
