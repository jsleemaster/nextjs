"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Head from "next/head";
import { useState, FormEvent, useCallback, useEffect } from "react";

import { ErrorDialog } from "components/ErrorDialog";
import { useAiFetch } from "hooks/useAiFetch";

import { Item } from "./style";

const AnyQuestion = () => {
  const [question, setQuestion] = useState("");
  const [promt, setPromt] = useState("");
  const [QnaList, setQnaList] = useState<string[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const FetchData = async () => {
      const { text, ok } = await useAiFetch("openAi", promt);
      if (!ok) {
        setError(true);
      }
      setQuestion("");
      setQnaList((prevQnaList) => [...prevQnaList, text]);
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

  if (error) {
    return <ErrorDialog title={`데이터 요청실패`} />;
  }

  return (
    <>
      <Head>
        <title>무엇이든 물어보세요!</title>
      </Head>
      <Box
        component="main"
        sx={{
          overflow: "hidden",
        }}
      >
        <Grid
          component="form"
          container
          onSubmit={GetAnswer}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Grid item>
            <TextField
              type="text"
              value={question}
              margin="dense"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              확인
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={(theme) => ({
            "padding": 2,
            "height": 500,
            "overflowY": "scroll",
            "&::-webkit-scrollbar": { height: 10, WebkitAppearance: "none" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.background.paper,
              borderRadius: 8,
              border: "2px solid",
            },
          })}
        >
          <Stack
            spacing={2}
            sx={{
              width: "100%",
              overflowY: "scroll",
            }}
          >
            {QnaList.map((v, i) => {
              return <Item key={i}>{v}</Item>;
            })}
          </Stack>
        </Box>
      </Box>
    </>
  );
};
export default AnyQuestion;
