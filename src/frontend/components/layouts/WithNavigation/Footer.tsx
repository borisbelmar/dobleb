import Container from '../Container'

export default function Footer() {
  return (
    <footer className="bg-dark-primary-800">
      <Container>
        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-gray-400 text-sm">
            © 2023 - Made with ❤️ by{' '}
            <a
              href="https://linkedin.com/in/bbelmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400"
            >
              Boris Belmar
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
