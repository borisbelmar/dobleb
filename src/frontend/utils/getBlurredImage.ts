const getBlurredImage = (url: string) => {
  const [base, ...rest] = url.split('/upload')
  return `${base}/upload/e_blur:1000,h_320${rest.join('/')}`
}

export default getBlurredImage
