import Head from "next/head";
import * as Config from "config";
async function getAnswer() {
  // Forward the authorization header
  const res = await fetch(`${Config.server}/api/openAi`, {
    method: "GET",
    // headers: { Authorization: `${Config.chatAPIKey}` },
  });
  console.log(res);
  return res.json();
}
getAnswer();
export default function AnyQuestion() {
  return (
    <>
      <Head>
        <title>무엇이든 물어보세요!</title>
      </Head>
      <div>gd</div>
    </>
  );
}
