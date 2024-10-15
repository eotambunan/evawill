import { request } from "http";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const aselole = request.json()
        console.log(aselole)
        const response = NextResponse.json({
            message: "aselole",
            data: "data1,2,3"
        }, 
        {
            status: 200,
        })
        return response
    } catch (error) {
        return NextResponse.json({
            status: 404,
            message: error
        })
    }
}


