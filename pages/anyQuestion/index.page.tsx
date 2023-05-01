import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useAiFetch } from "hooks/anyQuestion/useFetch";
import Head from "next/head";
import { useState, FormEvent, Suspense, useEffect, useCallback } from "react";

import { Item } from "./style";

export default function AnyQuestion() {
  const [question, setQuestion] = useState("");
  const [promt, setPromt] = useState("");
  const [QnaList, setQnaListList] = useState([]);

  const GetAnswer = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPromt(promt + ` Human: ${question}`);
    },
    [promt, question]
  );

  useEffect(() => {
    async function fetchData() {
      if (question) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const res = await useAiFetch("openAi", promt);
        setQuestion("");
        const { data } = await res.json();
        setPromt(promt + `${data.text}`);
        setQnaListList([...QnaList, data.text]);
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
      <Suspense fallback={<div>loading</div>}>
        <Box
          component="form"
          onSubmit={GetAnswer}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            type="text"
            helperText="질문을 입력해주세요."
            value={question}
            margin="dense"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button type="submit" variant="contained">
            확인
          </Button>
        </Box>
        <Stack spacing={2}>
          {QnaList.map((v, i) => {
            return <Item key={i}>{v}</Item>;
          })}
        </Stack>
      </Suspense>
    </>
  );
}
