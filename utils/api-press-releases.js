import { createClient } from 'contentful'

export async function getAllPosts(slug) {
  const entries = await createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
    .getEntries()
    .then((response) => {
      return response.items
    })
    .catch((error) => {
      return error
    })
}
