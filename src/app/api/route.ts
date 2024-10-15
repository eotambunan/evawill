import { NextResponse } from "next/server";

export async function GET() {
    const aselole = NextResponse.json({
        status : 200,
        message : "SUCCESS"
    })
    return aselole
  }