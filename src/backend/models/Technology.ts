export interface TechnologyDTO {
  id: string
  img: string
  name: string
}

export interface TechnologyNotionPage {
  id: string
  properties: {
    name: {
      title: {
        plain_text: string
      }[]
    },
    image: {
      url: string
    }
  }
}

export function mapTechnologyNotionPageToDTO(page: unknown): TechnologyDTO {
  const { id, properties } = page as TechnologyNotionPage

  return {
    id,
    name: properties.name.title[0].plain_text,
    img: properties.image.url
  }
}
