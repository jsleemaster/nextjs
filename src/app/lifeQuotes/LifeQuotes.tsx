"use client";
import { useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import LifeQuotesMessage from "components/lifeQuotes/Message";
import useLifeQuotes from "hooks/lifeQuotes/useLifeQuotes";
import useNotification from "hooks/lifeQuotes/useNotification";

import * as styles from "./page.css";

export default function LifeQuotes() {
  const { notificationErrorMessage, notificationPermission } =
    useNotification();
  const { lifeQuotes, time } = useLifeQuotes();
  const [test, setTest] = useState(false);
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = test ? helloRef : goodbyeRef;
  return (
    <>
      {notificationPermission !== "granted" && <>{notificationErrorMessage}</>}
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={test} nodeRef={nodeRef} classNames="fade">
          <div ref={nodeRef} className="button-container">
            <LifeQuotesMessage styles={styles} lifeQuotes={lifeQuotes} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
