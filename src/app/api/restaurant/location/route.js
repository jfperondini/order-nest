import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST (request) {
  try {
    const filePath = path.resolve('public/mocks/restaurant.json')
    const fileData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileData)
    const requestBody = await request.json()
    const location = requestBody.location
    const filteredLocation = data.filter(item => item.location === location)
    return NextResponse.json(filteredLocation)
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return NextResponse.error()
  }
}
