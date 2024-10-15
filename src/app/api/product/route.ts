import { NextRequest, NextResponse } from "next/server"

export async function GET(request:Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    console.log(id)

    try {
        const data = [
            {
                id: "1",
                name: "Sepatu",
                price: 50000
            },
            {
                id: "2",
                name: "Baju",
                price: 30000
            },
            {
                id: "2",
                name: "Celana",
                price: 70000
            },
        ]
        const response = NextResponse.json({
            status: 200,
            message: "SUCCESS",
            data : id?data.filter(x=>x.id== id):data
        })
        return response
    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: "error"
        })
    }
}