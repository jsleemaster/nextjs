import { FamousType } from "types/famous/type";

export const notionToken = process.env.NEXT_PUBLIC_NOTION_FAMOUS_TOKEN;
export const notionFamousId = process.env.NEXT_PUBLIC_NOTION_FAMOUS_ID;

export async function GET() {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${notionFamousId}/query`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${notionToken}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );

  const data = await res.json();
  const famousData: FamousType[] = [];
  data.results.forEach((famous) => {
    famousData.push({
      author: famous.properties.태그.select.name,
      title: famous.properties.이름.title[0].plain_text,
    });
  });
  return Response.json({ data: famousData });
}
