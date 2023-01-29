import Head from "next/head";
import { useState, FormEvent, Suspense, useEffect } from "react";
import { useAiFetch } from "hooks/anyQuestion/useFetch";
import Loading from "app/loading";

export default function AnyQuestion() {
  const [question, setQuestion] = useState<string>("");

  const GetAnswer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    setQuestion(`Human: ${question}`);
    const res = await useAiFetch("openAi", question);
    const { data } = await res.json();
    console.log(data);
    // } catch (error) {
    //   return error;
    // }
  };

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
        </div>
      </Suspense>
    </>
  );
}
