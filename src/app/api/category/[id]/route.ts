// import { NextApiRequest, NextResponse } from "next/server";
import { NextResponse, NextRequest } from "next/server";
import * as Mock from "@/utils";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // fetch mongo db
  return new Promise((resolve) => {
    setTimeout(() => {
      const detail = Mock.mainCategory.find((item) => item.key === params.id);
      if (detail) {
        
        resolve(Response.json({...detail}, { status: 200 }));
      } else {
        resolve(Response.json(null, { status: 204 }));
      }
    }, 500);
  });
}
