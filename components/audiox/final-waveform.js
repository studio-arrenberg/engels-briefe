import React, { Component } from 'react';
// import WaveSurfer from 'wavesurfer.js';

// import WaveSurfer from 'wavesurfer.js/src/wavesurfer.js'

// require('wavesurfer.js');
 
// import React from 'react';
import ReactDOM from 'react-dom';
// import Wavesurfer from 'wavesurfer.js';

import dynamic from 'next/dynamic';
const WaveSurfer = dynamic(
    () => import('wavesurfer.js'),
    {
        ssr: false
    }
)

// import { WaveformContianer, Wave, PlayButton } from './Waveform.styled';
// import { WaveformContianer, Wave, PlayButton } from './Wavesurfer.styled.js';
// import { WaveformContianer, Wave, PlayButton } from './Wavesurfer.styled'

class Waveform extends Component {  
  state = {
    playing: false,
  };

  componentDidMount() {
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {
    const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

    return (
    //   <WaveformContianer>
        // <PlayButton onClick={this.handlePlay} >
        //   {!this.state.playing ? 'Play' : 'Pause'}
        // </PlayButton>
        // <Wave id="waveform" />
        <audio id="track" src={url} />
    //   </WaveformContianer>
    );
  }
};

export default Waveform;