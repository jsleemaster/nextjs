import { NextApiRequest, NextApiResponse } from "next";
interface Prompt {
  model: String;
  temperature: Number;
  max_tokens: Number;
  top_p: Number;
  frequency_penalty: Number;
  presence_penalty: Number;
  data: String;
}

const generatePrompt = (data: Prompt) => {
  console.log(data, "<<<<<<<<");
  return data;
};
type Method = "GET" | "POST" | "PUT" | "DELETE";
type Http = [Method, string];

interface EndPoint {
  openAi: Http;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  switch (requestMethod) {
    case "POST":
      return res.status(200).json(generatePrompt(body));
  }
  return res.status(404).json({ message: "Not Found" });
}
