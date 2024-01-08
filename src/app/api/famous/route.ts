export const notionToken = process.env.NEXT_PUBLIC_NOTION_FAMOUS_TOKEN;
export const notionFamousId = process.env.NEXT_PUBLIC_NOTION_FAMOUS_ID;

import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${notionFamousId}/query`,
    {
      method: "POST",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type, Authorization",

        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${notionToken}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );

  const data = await res.json();

  return Response.json({ data });
}
