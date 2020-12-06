import idleTimer from "idle-timer";
import { useState } from "react";
import Router from "next/router";
import { useRouter, Redirect } from "next/router";
import Link from "next/link";
import constants from "./constants";

export default function Idle(props) {
  const router = useRouter();
  const [idle, SetIdle] = useState(false);

  function callbackFn() {
    //   if (!idle) {
    console.log("You're idle!");

    SetIdle(true);

    // setTimeout(router.push("/"), 5000);

    setTimeout(
      function () {
        if (idle == true) {
          console.log("leave!");
          router.push("/");
        }
      }.bind(this),
      500000
    );
  }
  function activeCallbackFn() {
    console.log("You're awake ;)");
    SetIdle(false);
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

  return (<></>)

}