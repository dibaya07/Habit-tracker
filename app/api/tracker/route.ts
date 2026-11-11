import { NextResponse } from "next/server";

console.log("hello world")

export async function GET( res:NextResponse){
    return NextResponse.json({"message":" hello world"})
}
