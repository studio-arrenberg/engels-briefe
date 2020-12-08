import idleTimer from "idle-timer";
import { useState, useEffect } from "react";
import Router from "next/router";
import { useRouter, Redirect } from "next/router";
import Link from "next/link";
import constants from "./constants";

export default function Idle(props) {
  // const router = useRouter();
  const [idle, SetIdle] = useState(false);

  function callbackFn() {
    console.log("You're idle!");
    SetIdle(true);

    // setTimeout(
    //   function () {
    //     if (idle == true) {
    //       console.log("leave!");
    //       router.push("/");
    //     }
    //   }.bind(this),
    //   500000
    // );
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      // setCount(1);
      if (idle == true) {
        window.location = "http://localhost:3000";
      }
    }, 3000);
    return () => clearTimeout(timeout);
  });

  function activeCallbackFn() {
    console.log("You're awake ;)");
    SetIdle(false);
    return () => clearTimeout(timeout);
  }

  if (typeof window !== "undefined") {
    // browser code
    var timer;
    timer = idleTimer({
      // function to fire after idle
      callback: callbackFn,
      // function to fire when active
      activeCallback: activeCallbackFn,
      // Amount of time in milliseconds before becoming idle. default 60000
      idleTime: constants.timer.idle,
    });
  }

  return <></>;
}
