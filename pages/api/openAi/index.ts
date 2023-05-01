import { openai } from "config";
import { NextApiRequest, NextApiResponse } from "next";
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
  const reuslt: { status: boolean; text: string | undefined } = {
    status: false,
    text: "",
  };
  const AiResponse = await openai.createCompletion(prompt);
  if (AiResponse.data.choices[0]) {
    reuslt.status = true;
    reuslt.text = AiResponse.data.choices[0]?.text;
    return reuslt;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestMethod = req.method;
  const body = JSON.parse(req?.body);

  switch (requestMethod) {
    case "POST":
      return res.status(200).json({
        data: await generatePrompt(body),
      });
  }
  return res.status(404).json({ message: "Not Found" });
}
