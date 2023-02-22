import getBlurredImage from './getBlurredImage'

describe('getBlurredImage', () => {
  it('should return a blurred image', () => {
    const url = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1/recipes/recipe_1'
    const blurredImage = getBlurredImage(url)
    expect(blurredImage).toEqual('https://res.cloudinary.com/dkkgmzpqd/image/upload/e_blur:1000/h_320/v1/recipes/recipe_1')
  })

  it('should return an empty string if no url is provided', () => {
    const url = ''
    const blurredImage = getBlurredImage(url)
    expect(blurredImage).toEqual('')
  })
})
