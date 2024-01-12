import { Client, isFullPage } from "@notionhq/client";

import { LifeQuotesType } from "types/lifeQuotes/type";

export const notionToken = process.env.NEXT_PUBLIC_NOTION_FAMOUS_TOKEN;
export const notionQuotesId = process.env.NEXT_PUBLIC_NOTION_FAMOUS_ID;
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_FAMOUS_TOKEN,
  notionVersion: "2022-06-28",
});

export async function GET() {
  const { results } = await notion.databases.query({
    database_id: notionQuotesId as string,
  });
  const quotesData: LifeQuotesType[] = [];
  results.forEach((quotes, idx) => {
    if (!isFullPage(quotes)) {
      return;
    }
    if (
      "select" in quotes.properties.Author &&
      "title" in quotes.properties.Title
    ) {
      const test = {
        author: quotes.properties.Author.select?.name,
        title: quotes.properties.Title.title[0].plain_text,
        idx,
      };
      quotesData.push(test);
    }
  });
  return Response.json({ data: quotesData });
}
