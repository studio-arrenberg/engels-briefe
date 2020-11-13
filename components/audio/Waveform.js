import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FiSkipBack } from "react-icons/fi";
// import ReactTimeout from "react-timeout";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "white",
  progressColor: "black",
  cursorColor: "red",
  barRadius: 1,
  responsive: true,
  height: 50,
  barWidth: 0.5,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true,
});

export default function Waveform({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  // Set Volume
  const [volume, setVolume] = useState(0.8);

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function () {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      setPlay(true);

      // Auto start Player:
      // handleRestart();

      // wavesurfer.current.bind(wavesurfer);
      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
        // alert('Mute: ' + wavesurfer.current.getMute() + ' time: ' + wavesurfer.current.getCurrentTime() + ' Vol: ' + wavesurfer.current.getVolume() + ' Play: ' + wavesurfer.current.isPlaying())
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const handleRestart = () => {
    // setPlay(!playing);
    wavesurfer.current.play(0);
  };

  const onVolumeChange = (e) => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div>
      <div className="controls">
        {/* <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button> */}

        <div className="reset" onClick={handleRestart}>
          <FiSkipBack />
        </div>
      </div>

      <div id="waveform" ref={waveformRef} />
    </div>
  );
}
