import { NextApiRequest, NextApiResponse } from "next";

import { openai } from "config";
interface Prompt {
  model: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  prompt: string;
  stop: string[];
}

const generatePrompt = async (prompt: Prompt) => {
  const result: {
    ok: boolean;
    text: string | undefined;
    status: number;
  } = {
    ok: false,
    text: "",
    status: 404,
  };

  try {
    const AiResponse = await openai.createCompletion(prompt);

    if (AiResponse.data.choices[0]) {
      result.ok = true;
      result.text = AiResponse.data.choices[0]?.text;
      result.status = 200;
      return result;
    }
  } catch (error) {
    result.status = error.response.status;
    return result;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestMethod = req.method;
  const body = JSON.parse(req?.body);

  switch (requestMethod) {
    case "POST": {
      const data = await generatePrompt(body);
      if (data) {
        return res.status(data.status).json({ data });
      }
    }
  }
  return res.status(404).json({ message: "Not Found" });
}
