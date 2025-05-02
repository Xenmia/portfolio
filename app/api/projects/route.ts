import { NextRequest, NextResponse } from "next/server";
import projects from "./projects.json"

export async function GET(req: NextRequest) {
  const data = projects
  return NextResponse.json(data)
}