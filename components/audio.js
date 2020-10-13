import React, { useState } from "react";
// import "./styles.css";

import Waveform from "./audio/Waveform";
import PlayList from "./audio/PlayList";

// const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

const tracks = [
  {
    id: 0,
    title: "",
    url:
      "../audio/001.mp3"
  },
  {
    id: 1,
    title: "",
    url:
      "../public/audio/001.mp3"
  }
];

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="app">
      <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
            <Waveform url={selectedTrack.url} />

      <br />
    </div>
  );
}