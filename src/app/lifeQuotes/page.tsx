"use client";

import { useEffect, useRef, useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";

import "./page.css";
import LifeQuotesMessage from "components/lifeQuotes/Message";
import useLifeQuotes from "hooks/lifeQuotes/useLifeQuotes";
import useNotification from "hooks/lifeQuotes/useNotification";

import * as styles from "./page.css";

export default function LifeQuotes() {
  const { notificationErrorMessage, notificationPermission } =
    useNotification();
  const { lifeQuotes, time } = useLifeQuotes();
  const nodeRef = useRef(null);
  const [test, setTest] = useState(false);
  return (
    <>
      {notificationPermission !== "granted" && <>{notificationErrorMessage}</>}
      <button onClick={() => setTest(true)}>테스트</button>
      <CSSTransition
        nodeRef={nodeRef}
        in={test}
        timeout={300}
        classNames={`test`}
        unmountOnExit
        onEnter={() => setTest(false)}
        onExited={() => setTest(true)}
      >
        <div onClick={() => setTest(false)}>테스트</div>
      </CSSTransition>
      <LifeQuotesMessage styles={styles} lifeQuotes={lifeQuotes} />
    </>
  );
}
