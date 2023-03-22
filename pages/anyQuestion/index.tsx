import Head from "next/head";
import { useState, FormEvent, Suspense, useEffect, useCallback } from "react";
import { useAiFetch } from "hooks/anyQuestion/useFetch";
import Loading from "components/loading";

export default function AnyQuestion() {
  const [question, setQuestion] = useState<string>("");
  const [promt, setPromt] = useState<string>("");
  const [QnaList, setQnaListList] = useState<Array<string>>([]);

  const GetAnswer = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPromt(promt + ` Human: ${question}`);
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (question) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const res = await useAiFetch("openAi", promt);
        setQuestion("");
        const { data } = await res.json();
        setPromt(promt + `${data.text}`);
        // setQnaListList([...QnaList, data.text]);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promt]);
  return (
    <>
      <Head>
        <title>무엇이든 물어보세요!</title>
      </Head>
      <Suspense fallback={<Loading />}>
        <div>
          <form onSubmit={GetAnswer}>
            <input
              type="text"
              placeholder="질문을 입력해주세요."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button type="submit"> 확인 </button>
          </form>
          <ul>
            {QnaList.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </ul>
        </div>
      </Suspense>
    </>
  );
}
