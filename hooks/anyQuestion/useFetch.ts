import * as Config from "config";
const DEFAULT_PARAMS = {
  model: "text-davinci-003",
  temperature: 0.9,
  max_tokens: 256,
  top_p: 1,
  prompt: "",
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [" Human:", " AI:"],
};

export const useAiFetch = async (url: string, prompt: string) => {
  const params = { ...DEFAULT_PARAMS, prompt };

  return await fetch(`${Config.server}/api/${url}`, {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${Config.chatAPIKey}`,
    },
    cache: "no-store",
    body: JSON.stringify(params),
  });
};
