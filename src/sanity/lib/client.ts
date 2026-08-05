import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token || undefined,
})

export interface MenuItemData {
  _id: string
  name: string
  slug: { current: string }
  price: number
  description: string
  ingredients?: string[]
  pairing?: string
  image?: any
  imageUrl?: string
  category?: string
  isCrowdFavorite?: boolean
}

export async function fetchCrowdFavorites(): Promise<MenuItemData[]> {
  try {
    const query = `*[_type == "menuItem"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      description,
      ingredients,
      pairing,
      category,
      isCrowdFavorite,
      "imageUrl": image.asset->url
    }`
    const data = await client.fetch(query, {}, { cache: 'no-store' })
    return data || []
  } catch (err) {
    console.error('Error fetching menu items from Sanity:', err)
    return []
  }
}
