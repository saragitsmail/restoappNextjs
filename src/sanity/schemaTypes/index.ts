import { type SchemaTypeDefinition } from 'sanity'
import { menuItem } from './menuItem'
import { order } from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuItem, order],
}

