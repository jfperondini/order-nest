import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET () {
  try {
    const filePath = path.resolve('public/mocks/orderNest.json')
    const fileData = fs.readFileSync(filePath, 'utf8')
    return NextResponse.json(JSON.parse(fileData))
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return NextResponse.error()
  }
}
