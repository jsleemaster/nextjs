import * as Config from "config";
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

type UseAiFetchResult = {
  loading: boolean;
  error: string;
  ok: boolean;
  text: string;
  status: number;
};

export const useAiFetch = async (
  url: string,
  prompt: string
): Promise<UseAiFetchResult> => {
  const params = { ...DEFAULT_PARAMS, prompt };

  try {
    const res = await fetch(`${Config.server}/api/${url}`, {
      method: "POST",
      headers: {
        ContentType: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHATGPTAPI}`,
      },
      cache: "no-store",
      body: JSON.stringify(params),
    });

    const { status, error, ok } = await res.json();
    const loading = !ok;
    return { loading, error, status } as UseAiFetchResult;
  } catch (error) {
    console.log(error);
    return { error } as UseAiFetchResult;
  }
};
