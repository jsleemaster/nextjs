import Head from "next/head";
import { useState, FormEvent, Suspense } from "react";
import { useAiFetch } from "hooks/anyQuestion/useFetch";

export default function AnyQuestion() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const GetAnswer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(question, "이거 찍ㅎ");
    try {
      const res = await useAiFetch("openAi", question);
      console.log(res);
      return res.json();
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Head>
        <title>무엇이든 물어보세요!</title>
      </Head>
      <Suspense fallback={<div>로딩중...</div>}>
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
