import { createClient } from 'contentful'

const getClient = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  return client
}

export async function getEntries(
  content_type,
  category = false,
  order = false,
  limit = false,
  skip = false
) {
  const query = { content_type }

  if (category) {
    query['fields.categories.sys.id[in]'] = category
  }

  if (order) {
    query.order = '-fields.date'
  }

  if (limit && !isNaN(limit)) {
    query.limit = limit
  }

  if (skip) {
    query.skip = skip
  }

  const response = await getClient()
    .getEntries(query)
    .then((entry) => {
      return entry
    })
    .catch(() => {
      return 'error'
    })

  return response
}

export async function getEntryById(id) {
  const response = await getClient()
    .getEntry(id)
    .then((entry) => {
      return entry
    })
    .catch(() => {
      return 'error'
    })

  return response
}

export async function getEntryBySlug(contentType, slug) {
  const response = await getClient()
    .getEntries({
      content_type: contentType,
      'fields.slug': slug,
      limit: 1
    })
    .then((entry) => {
      return entry
    })
    .catch(() => {
      return 'error'
    })

  return response
}
