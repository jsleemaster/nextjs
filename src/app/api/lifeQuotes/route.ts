import { LifeQuotesType } from "types/lifeQuotes/type";

export const notionToken = process.env.NEXT_PUBLIC_NOTION_FAMOUS_TOKEN;
export const notionQuotesId = process.env.NEXT_PUBLIC_NOTION_FAMOUS_ID;

export async function GET() {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${notionQuotesId}/query`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${notionToken}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );
  const data = await res.json();
  const quotesData: LifeQuotesType[] = [];
  if (data.results && data.results.length > 0) {
    data.results.forEach((quotes, idx) => {
      quotesData.push({
        author: quotes.properties.author?.Author?.select?.name,
        title: quotes.properties.title?.title.title[0]?.plain_text,
        idx,
      });
    });
  }
  return Response.json({ data: quotesData, test: data, test2: res });
}
