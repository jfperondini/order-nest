import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST (request) {
  try {
    const filePath = path.resolve('public/mocks/category.json')
    const fileData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileData)
    const requestBody = await request.json()
    const categoryIds = requestBody
    const filteredCategories = data.filter(item =>
      categoryIds.includes(item.id)
    )
    return NextResponse.json(filteredCategories)
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return NextResponse.error()
  }
}
