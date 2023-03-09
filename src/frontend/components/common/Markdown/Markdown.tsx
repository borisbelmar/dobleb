import ReactMarkdown from 'react-markdown'
import Anchor from './components/Anchor'

interface Props {
  content: string
  className: string
}

export default function Markdown({ content, className }: Props) {
  return (
    <ReactMarkdown
      className={className}
      components={{
        a: Anchor
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
