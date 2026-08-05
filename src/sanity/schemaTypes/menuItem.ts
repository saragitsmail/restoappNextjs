import { defineField, defineType } from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (DA)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ingredients',
      title: 'Key Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pairing',
      title: 'Recommended Sommelier Pairing',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'High-Res Dish Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      // validation supprimée temporairement
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Starters & Raw Bar', value: 'starters' },
          { title: 'Main Course & Meats', value: 'mains' },
          { title: 'Signature Creations', value: 'signature' },
          { title: 'Artisanal Desserts', value: 'desserts' },
        ],
      },
      initialValue: 'signature',
    }),
    defineField({
      name: 'isCrowdFavorite',
      title: 'Crowd Favorite (Show on Landing Page)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle ? `${subtitle} DA` : '',
        media,
      }
    },
  },
})

