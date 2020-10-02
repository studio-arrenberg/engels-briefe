// import React, { useRef, useEffect } from "react";
// import WaveSurfer from "wavesurfer.js";

// export default function Chat(){
//   const waveformRef = useRef();

//   useEffect(() => {
//     if(waveformRef.current) {
//       const wavesurfer = WaveSurfer.create({
//         container: waveformRef.current,
//       });
//     }
//   }, []);

//   return(
//     <>
//       <div ref={waveformRef}>
//       </div>
//     </>
//   )
//  }

import React, { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

export default function Chat(){
  const waveformRef = useRef();

  useEffect(() => {
    if(waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
      });
    }
  }, []);

  return(
    <>
      <div ref={waveformRef}>
      </div>
    </>
  )
 }
