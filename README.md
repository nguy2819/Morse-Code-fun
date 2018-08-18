## :dizzy:What I achieved in this Morse Code program: :dizzy:

- [x] I used JS For Loop that automatically converts English text to Morse code (dots and dashes). 
- [ ] Also translate Morse code into text.
- [ ] I'll generate Morse Code by toggling between 0 and 1 into sounds via :loudspeaker: [OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode).
- [ ] I'm also trying to work on converting dots and dashes into sequences of volume changes.:notes::thumbsup::shipit:
- [ ] Last but not least, I would like to transfer this program into mobile app :iphone:(open source) for every users to use it offline.
- [ ] Finally, I would like to like to build a practice site :memo:- where people can practice listening :headphones: morse code and answer with the Right/Wrong text - send to API and DB - DB will send back the result if the user pass/fail the practices, and vice versa. :astonished:

## :eyes:What I've learn: :eyes:

>- According to Eric Holk's blog, APIs include parameter automation => allow users to schedule changes in various audio parameters at specific points in time.
>- [Web Audio APIs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
>- [GainNode](https://developer.mozilla.org/en-US/docs/Web/API/GainNode): allows us to adjust the volume.
>- A common modification is multiplying the samples by a value to make them louder or quieter (as is the case with GainNode). Once the sound has been sufficiently processed for the intended effect, it can be linked to the input of a destination (AudioContext.destination), which sends the sound to the speakers or headphones. (MDN source)
> 1. Create audio context
> 2. Inside the context, create sources — such as <audio>, oscillator, stream
> 3. Create effects nodes, such as reverb, biquad filter, panner, compressor
> 4. Choose final destination of audio, for example your system speakers
> 5. Connect the sources up to the effects, and the effects to the destination. (MDN source
 
```
var context = new (window.AudioContext || window.webkitAudioContext());
var oscillator = context.createOscillator();

var gain = context.createGain();

oscillator.frequency.value = 750;
oscillator.connect(context);
gain.connect(context.destination);

oscillator.start(0);
```
> - [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) example from MDN:
```
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  }
var space = ' ';
var comma = ',';
```
String.prototype.split() applies into this program:
```
translate(typeMorseCode){
        var arrayOfStrings = typeMorseCode.split(' '); //"9MorseCode" "7MorseCode"=> the space between 9 and 7 be removed
        for(let i = 0; i < arrayOfStrings.length; i++){
            let element = arrayOfStrings[i]; //represents the whole chunk of the character - like ---..
            let result = this.state.morseToAlpha[element];
        }
        return ;
    }
```
* Everybody can visit [Eric Holk's gist](https://gist.github.com/eholk/0115691987090973cefe) and [his blog](https://blog.theincredibleholk.org/blog/2014/06/23/generating-morse-code-with-javascript/) to learn more
* I got the available emoji and codes through [this link](https://www.webpagefx.com/tools/emoji-cheat-sheet/):muscle:
