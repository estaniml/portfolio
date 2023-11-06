import { createClient } from 'next-sanity'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import { schemaTypes } from '@/portfolio/schemas'

const projectId = '0pc2ajy0'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})

export const config = defineConfig({
    basePath: '/admin', 
  
    projectId,
    dataset,
    title: 'portfolio',
    apiVersion,
  
    plugins: [deskTool()],
  
    schema: {
      types: schemaTypes,
    },
  })