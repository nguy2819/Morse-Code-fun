import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allVoices from './voice';

ReactDOM.render(<App />, document.getElementById('root'));

const msg = new SpeechSynthesisUtterance();
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = ".... . -.--";

const voice = allVoices[4] // 47 total
console.log(`voice: ${voice.name}, language: ${voice.lang}`)
msg.voiceURI = voice.voiceURI;
msg.lang = voice.lang;

speechSynthesis.speak(msg);