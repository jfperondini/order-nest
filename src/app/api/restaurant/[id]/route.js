import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET (request) {
  try {
    const filePath = path.resolve('public/mocks/restaurant.json')
    const fileData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileData)
    const { pathname } = new URL(request.url)
    const id = pathname.split('/').pop()
    const item = data.find(item => item.id === id)
    return NextResponse.json(item)
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return NextResponse.error()
  }
}
