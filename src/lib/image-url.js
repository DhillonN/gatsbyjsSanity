import sanityConfig from '../../src/sanity.json'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityConfig.api)

export function imageUrlFor (source) {
  return builder.image(source).auto('format')
}