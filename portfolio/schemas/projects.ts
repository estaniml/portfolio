export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'spanishDescription',
      type: 'string',
      title: 'Spanish Description'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ]
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link'
    },
    {
      name: 'tools',
      type: 'array',
      title: 'Tools',
      of: [{ type: 'string' }]
    },
  ]
}