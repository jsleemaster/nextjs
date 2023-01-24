import * as Config from "config";

export const useAiFetch = async (url: string, data: string) => {
  return await fetch(`${Config.server}/api/${url}`, {
    method: "POST",
    headers: { Authorization: `${Config.chatAPIKey}` },
  });
};
