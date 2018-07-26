- According to Eric Holk's blog, APIs include parameter automation => allow users to schedule changes in various audio parameters at specific points in time.
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
