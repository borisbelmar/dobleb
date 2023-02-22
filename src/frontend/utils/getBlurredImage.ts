const getBlurredImage = (url: string) => {
  if (!url) return ''
  if (url.includes('cloudinary')) {
    const [base, ...rest] = url.split('/upload')
    return `${base}/upload/e_blur:1000/h_320${rest.join('/')}`
  }
  if (url.includes('unsplash')) {
    return `${url}&blur=3000&h=320&w=320&fit=crop&crop=entropy`
  }
}

export default getBlurredImage
