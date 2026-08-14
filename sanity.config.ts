'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '9mr6co1a',
  dataset: dataset || 'production',
  title: 'Lumière Fine Dining CMS',
  schema,
  plugins: [structureTool()],
})
