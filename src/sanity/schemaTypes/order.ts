import { defineField, defineType } from 'sanity'

export const order = defineType({
  name: 'order',
  title: 'Orders',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Delivery Address / Notes',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'items',
      title: 'Ordered Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'orderItem',
          title: 'Order Item',
          fields: [
            defineField({ name: 'name', title: 'Dish Name', type: 'string' }),
            defineField({ name: 'price', title: 'Price (DA)', type: 'number' }),
            defineField({ name: 'quantity', title: 'Quantity', type: 'number' }),
            defineField({ name: 'subtotal', title: 'Subtotal (DA)', type: 'number' }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'total',
      title: 'Total Amount (DA)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Preparing', value: 'preparing' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'notes',
      title: 'Special Instructions',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'total',
      phone: 'phone',
      status: 'status',
    },
    prepare(selection) {
      const { title, subtitle, phone, status } = selection
      return {
        title: `${title} (${phone || 'No phone'})`,
        subtitle: `${subtitle ? subtitle + ' DA' : ''} - Status: ${status || 'pending'}`,
      }
    },
  },
})
