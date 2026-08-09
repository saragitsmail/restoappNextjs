import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '@/sanity/env'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { customerName, phone, address, items, total, notes } = body

    if (!customerName || !phone || !items || !Array.isArray(items) || items.length === 0 || !total) {
      return NextResponse.json(
        { error: 'Missing required order fields (name, phone, items, total)' },
        { status: 400 }
      )
    }

    const orderDoc = {
      _type: 'order',
      customerName,
      phone,
      address: address || '',
      items: items.map((item: { name: string; price: number; quantity: number }) => ({
        _type: 'orderItem',
        _key: Math.random().toString(36).substring(2, 9),
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity),
        subtotal: Number(item.price) * Number(item.quantity),
      })),
      total: Number(total),
      status: 'pending',
      notes: notes || '',
      createdAt: new Date().toISOString(),
    }

    // Initialize Sanity client with token if available
    const writeToken = process.env.SANITY_API_TOKEN || token
    
    if (writeToken) {
      const sanityClient = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
        token: writeToken,
      })

      const createdDoc = await sanityClient.create(orderDoc)

      return NextResponse.json({
        success: true,
        orderId: createdDoc._id,
        message: 'Order created successfully in Sanity CMS!',
      })
    } else {
      // If token is missing, log order locally and respond with simulation ID
      console.warn(
        'SANITY_API_TOKEN is not configured. Simulating order storage:',
        orderDoc
      )
      
      const simulatedId = `order-sim-${Date.now()}`

      return NextResponse.json({
        success: true,
        orderId: simulatedId,
        message: 'Order received! (Sanity API Token missing, order simulated cleanly)',
      })
    }
  } catch (error: any) {
    console.error('Error handling order submission:', error)
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
