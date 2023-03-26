import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";
import CssBaseline from "@mui/material/CssBaseline";
const Body = styled.body`
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>JsLeeMaster</title>
        <meta name="description" content="jsleemaster App" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}
