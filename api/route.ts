import { NextResponse } from "next/server";
export async function GET() {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_FAMOUS_SAYING_DB_ID}/query`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NOTION_FAMOUS_SAYING_TOKEN}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
