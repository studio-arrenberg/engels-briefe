import idleTimer from "idle-timer";
import { useState } from "react";
import Router from "next/router";
import { useRouter, Redirect } from "next/router";
import Link from "next/link";


export default function Idle(props) {
  const [idle, SetIdle] = useState(false);
  // const [isThema, setThema] = useState("false");

  function callbackFn() {
    //   if (!idle) {
    console.log("You're idle!");

    SetIdle(true);

    setTimeout(
      function () {
        if (idle == true) {
          console.log("leave!");
          return <Redirect to="/" />

        }
      }.bind(this),
      3000
    );

    //   }
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
      idleTime: 5000,
    });
  }
  return (
    <>
      {idle ? (
        <div>
          <h1>IDLE !!!</h1>
          <p>Going home soon</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

// export function callbackFn() {
//     console.log("You're idle!");
//     return (
//         <h1 className="high">HELLO WORLD</h1>
//     )
//  }
