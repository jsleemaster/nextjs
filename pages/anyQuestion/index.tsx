import Head from "next/head";
import { useState, FormEvent } from "react";
import { useAiFetch } from "./useFetch";

export default function AnyQuestion() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const GetAnswer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await useAiFetch("openAi", question);
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
    </>
  );
}
