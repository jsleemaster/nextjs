import * as Config from "config";
const DEFAULT_PARAMS = {
  model: "text-davinci-002",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

export const useAiFetch = async (url: string, data: string) => {
  const params = { ...DEFAULT_PARAMS, data };

  return await fetch(`${Config.server}/api/${url}`, {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${Config.chatAPIKey}`,
    },
    body: JSON.stringify(params),
  });
};
