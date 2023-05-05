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
  data: {
    text: string;
    status: boolean;
  };
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

    const { data, error, ok } = await res.json();
    const loading = !ok;
    return { loading, error, data } as UseAiFetchResult;
  } catch (error) {
    console.log(error);
    return { error } as UseAiFetchResult;
  }
};
