import { NextResponse } from 'next/server'

export async function GET () {
  const htmlContent = `   
   <h1 style="text-align: center;">JSON Server</h1>
   <p style="text-align: center;">✧*｡٩(ˊᗜˋ*)و✧*｡</p>
  `
  return new NextResponse(htmlContent, {
    headers: { 'Content-Type': 'text/html' }
  })
}
