import { createClient } from 'contentful'

const getClient = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  return client
}

export async function getAllEntries(contentType) {
  const entries = await getClient().getEntries({
    content_type: contentType
  })

  return entries
}

export async function getEntryById(id) {
  const entry = await getClient().getEntry(id)

  return entry.fields
}

export async function getEntryBySlug(contentType, slug) {
  const entries = await getClient().getEntries({
    content_type: contentType,
    'fields.slug[in]': slug,
    limit: 1
  })

  return entries.items[0].fields
}

export async function getNEntries(contentType, numberOfPreviews) {
  const entries = await getClient().getEntries({
    content_type: contentType,
    limit: numberOfPreviews,
    order: '-fields.date'
  })

  return entries.items
}
