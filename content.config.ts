import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    /**
     * This is collection for content-wind theme
     * Create `content.config.ts` in project root to overwrite this
     */
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        layout: z.string(),
        pageClass: z.string().optional(),
      }),
    }),
    events: defineCollection({
      type: 'data',
      source: 'events/*.yml',
      schema: z.object({
        title: z.string(),
        location: z.string(),
        date: z.string(),
        locationPending: z.boolean().optional(),
        speakers: z.array(z.string()),
        description: z.string(),
      }),
    }),
  },
})
