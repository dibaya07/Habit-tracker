import { NextResponse } from "next/server";

console.log("hello world")

export async function GET(){
    return NextResponse.json({"message":" hello world"})
}
