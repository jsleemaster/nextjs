import { Configuration, OpenAIApi } from "openai";
export const ENV = process.env.NODE_ENV;

const configuration = new Configuration({
  organization: process.env.NEXT_PUBLIC_CHATGPTORG,
  apiKey: process.env.NEXT_PUBLIC_CHATGPTAPI,
});

export const openai = new OpenAIApi(configuration);
