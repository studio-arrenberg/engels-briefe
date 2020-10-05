import React, { Component } from 'react';

import { WaveformContianer, Wave, PlayButton } from './Waveform.styled';

class Waveform extends Component {  
  render() {
    return (
      <WaveformContianer>
        <PlayButton> // This is a <button />
          Play
        </PlayButton>
        <Wave id="waveform" /> // This is a <div />
        <audio id="track" />
      </WaveformContianer>
    );
  }
};

export default Waveform;