'use client'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './portfolio/schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,

  basePath: "/admin",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})