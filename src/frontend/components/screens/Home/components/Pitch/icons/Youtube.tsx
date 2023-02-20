interface Props {
  className?: HTMLOrSVGImageElement['className']
}

export default function YoutubeIcon({ className }: Props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Zm36.265-5.927c-.294-1.13-1.162-2.021-2.263-2.324C32.005 15.2 24 15.2 24 15.2s-8.005 0-10.002.55c-1.101.302-1.969 1.192-2.263 2.323-.535 2.05-.535 6.327-.535 6.327s0 4.277.535 6.327c.294 1.13 1.162 2.021 2.263 2.324C15.995 33.6 24 33.6 24 33.6s8.005 0 10.002-.55c1.101-.302 1.969-1.192 2.263-2.323.535-2.05.535-6.327.535-6.327s0-4.277-.535-6.327Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6 28.8v-8l6.4 4-6.4 4Z"
        fill="currentColor"
      />
    </svg>
  )
}
