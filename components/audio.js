import React, { useState } from "react";
import Waveform from "./audio/Waveform";
import PlayList from "./audio/PlayList";

export default function App({file}) {

  const url = '../audio/' + file;

  const tracks = [
    {
      id: 0,
      title: "",
      url: url
    }
  ];
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