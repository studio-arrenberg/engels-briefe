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
      "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
  },
  {
    id: 1,
    title: "",
    url:
      "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
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