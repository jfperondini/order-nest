import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST (request) {
  try {
    const { idRestaurant } = await request.json()
    const filePath = path.resolve('public/mocks/menuItem.json')
    const fileData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileData)
    const filteredData = data.filter(item => item.idRestaurant === idRestaurant)
    return NextResponse.json(filteredData)
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.error()
  }
}
