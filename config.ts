const chatAPIKey = process.env.chatAPIKey;

import { Configuration, OpenAIApi } from "openai";
export const ENV = process.env.NODE_ENV;
export const server = ENV === "development" ? "http://localhost:3000" : "";

const configuration = new Configuration({
  apiKey: chatAPIKey,
});

export const openai = new OpenAIApi(configuration);
