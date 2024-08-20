import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET () {
  try {
    const filePath = path.resolve('public/mocks/restaurant.json')
    const fileData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileData)
    const contagemPorLocalizacao = data.reduce((acc, item) => {
      const location = item.location
      if (location) {
        if (!acc[location]) {
          acc[location] = 0
        }
        acc[location]++
      }
      return acc
    }, {})
    const resultadoFormatado = Object.keys(contagemPorLocalizacao).map(
      location => ({
        location,
        count: contagemPorLocalizacao[location]
      })
    )
    return NextResponse.json(resultadoFormatado)
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return NextResponse.error()
  }
}
