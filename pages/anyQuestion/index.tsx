import Head from "next/head";
import * as Config from "config";
import { useState, FormEvent } from "react";

export default function AnyQuestion() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const getAnswer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`${Config.server}/api/openAi`, {
      method: "POST",
      headers: { Authorization: `${Config.chatAPIKey}` },
    });
    return res.json();
  };

  return (
    <>
      <Head>
        <title>무엇이든 물어보세요!</title>
      </Head>
      <div>
        <form onSubmit={getAnswer}>
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
