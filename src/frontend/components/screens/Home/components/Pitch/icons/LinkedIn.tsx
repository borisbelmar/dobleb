interface Props {
  className?: HTMLOrSVGImageElement['className']
}

export default function LinkedInIcon({ className }: Props) {
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
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Zm16.96-4.122h-5.438V36.22h5.438V19.878Zm.359-5.055C17.284 13.22 16.138 12 14.277 12c-1.86 0-3.077 1.22-3.077 2.823 0 1.569 1.18 2.824 3.006 2.824h.035c1.897 0 3.078-1.255 3.078-2.824ZM36.575 26.85c0-5.02-2.683-7.356-6.262-7.356-2.888 0-4.18 1.586-4.902 2.699v-2.315h-5.44c.072 1.534 0 16.342 0 16.342h5.44v-9.127c0-.488.035-.975.179-1.325.393-.976 1.288-1.986 2.79-1.986 1.97 0 2.757 1.499 2.757 3.695v8.743h5.438v-9.37Z"
        fill="currentColor"
      />
    </svg>
  )
}
