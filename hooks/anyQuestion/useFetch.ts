import * as Config from "config";
const chatAPIKey = process.env.chatAPIKey;

const DEFAULT_PARAMS = {
  model: "text-davinci-003",
  temperature: 0.9,
  max_tokens: 256,
  top_p: 1,
  prompt: "",
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [" Human:", " Robot:"],
};

export const useAiFetch = async (url: string, prompt: string) => {
  const params = { ...DEFAULT_PARAMS, prompt };
  return await fetch(`${Config.server}/api/${url}`, {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${chatAPIKey}`,
    },
    cache: "no-store",
    body: JSON.stringify(params),
  });
};
