import { Client } from "@notionhq/client";

import { LifeQuotesType } from "types/lifeQuotes/type";

export const notionToken = process.env.NEXT_PUBLIC_NOTION_FAMOUS_TOKEN;
export const notionQuotesId = process.env.NEXT_PUBLIC_NOTION_FAMOUS_ID;
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_FAMOUS_TOKEN,
});

export async function GET() {
  const { results } = await notion.databases.query({
    database_id: notionQuotesId as string,
  });
  const quotesData: LifeQuotesType[] = [];
  console.log(`results`, results);
  results.forEach((quotes, idx) => {
    quotesData.push({
      author: quotes.properties.Author.select.name,
      title: quotes.properties.Title.title[0].plain_text,
      idx,
    });
  });
  return Response.json({ data: quotesData });
}
