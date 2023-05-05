import { useAiFetch } from "@/hooks/anyQuestion/useAiFetch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Head from "next/head";
import { useState, FormEvent, useCallback, useEffect } from "react";

import { Item } from "./style";

export default function AnyQuestion() {
  const [question, setQuestion] = useState("");
  const [promt, setPromt] = useState("");
  const [QnaList, setQnaList] = useState<string[]>([]);

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await useAiFetch("openAi", promt);
      setQuestion("");
      setQnaList((prevQnaList) => [...prevQnaList, data?.text]);
    };
    if (promt) {
      FetchData();
    }
  }, [promt]);

  const GetAnswer = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPromt(promt + ` Human: ${question}`);
    },
    [promt, question]
  );

  return (
    <>
      <Head>
        <title>무엇이든 물어보세요!</title>
      </Head>
      <Box component="main">
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
      </Box>
    </>
  );
}
