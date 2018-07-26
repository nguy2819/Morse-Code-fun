- According to Eric Holk's blog, APIs include parameter automation => allow users to schedule changes in various audio parameters at specific points in time.
- Web Audio APIs https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
### A common modification is multiplying the samples by a value to make them louder or quieter (as is the case with GainNode). Once the sound has been sufficiently processed for the intended effect, it can be linked to the input of a destination (AudioContext.destination), which sends the sound to the speakers or headphones. (MDN source)

### 1. Create audio context
### 2. Inside the context, create sources — such as <audio>, oscillator, stream
### 3. Create effects nodes, such as reverb, biquad filter, panner, compressor
### 4. Choose final destination of audio, for example your system speakers
### 5. Connect the sources up to the effects, and the effects to the destination. (MDN source)
  
- GainNode: allows us to adjust the volume.

var context = new (window.AudioContext || window.webkitAudioContext()); <br />
var oscillator = context.createOscillator(); <br />

var gain = context.createGain(); <br />

oscillator.frequency.value = 750; <br />

oscillator.connect(context); <br />
gain.connect(context.destination); <br />

oscillator.start(0); <br />

- We generate Morse Code by toggling between 0 and 1. 
- I used JS For Loop that automatically converts English text to Morse code (dots and dashes). 
### - Then I'm trying to work on converting dots and dashes into sequences of volume changes.

Everybody can visit his gist to learn more: https://gist.github.com/eholk/0115691987090973cefe
