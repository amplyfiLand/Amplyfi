import { defineField, defineType } from 'sanity';

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headlineLines',
          title: 'Headline Lines',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'cta', title: 'CTA Button Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Stats Bar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'whoWeAre',
      title: 'Who We Are Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [defineField({ name: 'title', title: 'Title', type: 'string' })],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'whatWeDo',
      title: 'What We Do Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'kind',
                  title: 'Kind',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Discover', value: 'discover' },
                      { title: 'Develop', value: 'develop' },
                      { title: 'Amplify', value: 'amplify' },
                    ],
                  },
                }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'theySaid',
      title: 'They Said Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'objection', title: 'Objection', type: 'string' }),
                defineField({ name: 'response', title: 'Response', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'legacies',
      title: 'Legacies Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'lines',
          title: 'Lines',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'howWeHelp',
      title: 'How We Help Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'kind',
                  title: 'Kind',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Executive Producer', value: 'executiveProducer' },
                      { title: 'Personal Manager', value: 'personalManager' },
                      { title: 'Head of Talents', value: 'headOfTalents' },
                      { title: 'Creative Manager', value: 'creativeManager' },
                      { title: 'Sales Manager', value: 'salesManager' },
                    ],
                  },
                }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'cta', title: 'CTA Button Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string' }),
        defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'string' }),
        defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
      ],
    }),
  ],
});
