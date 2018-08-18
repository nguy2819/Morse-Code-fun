import React, { Component } from 'react';
import './App.css';


//Dictionary named alphaToMorse
const alphaToMorse = {
    'a':".-",
    'b':"-...",
    'c':"-.-.",
    'd':"-..",
    'e':".",
    'f':"..-.",
    'g':"--.",
    'h':"....",
    'i':"..",
    'j':".---",
    'k':"-.-",
    'l':".-..",
    'm':"--",
    'n':"-.",
    'o':"---",
    'p':".--.",
    'q':"--.-",
    'r':".-.",
    's':"...",
    't':"-",
    'u':"..-",
    'v':"...-",
    'w':".--",
    'x':"-..-",
    'y':"-.--",
    'z':"--..",
    ' ':"/",
    '0': "-----",
    '1':".----",
    '2':"..---",
    '3':"...--",
    '4':"....-",
    '5':".....",
    '6':"-....",
    '7':"--...",
    '8':"---..",
    '9':"----."
}

function search(typeAnything){
    let sumMorseCode = '';
    for(var i = 0; i < typeAnything.length; i++){
        let element = typeAnything[i].toLowerCase();
        var result = alphaToMorse[element];
        if(i !== 0){
            sumMorseCode += ' '; //sumMorseCode = sumMorseCode + ' '
        }
        sumMorseCode += result; //sumMorseCode = sumMorseCode + (result or alphaToMorse[element])
    }
    return sumMorseCode;
}


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            typeSomething: '',
            morseCodeResult: '',
            typeMorseCode: '',
            textResult:'',
            morseToAlpha: this.reverseIt()
        }
        this.translate = this.translate.bind(this)
    }

    translate(typeMorseCode){
        var arrayOfStrings = typeMorseCode.split(' '); //"9MorseCode" "7MorseCode"=> the space between 9 and 7 be removed
        for(let i = 0; i < arrayOfStrings.length; i++){
            let element = arrayOfStrings[i]; //represents the whole chunk of the character - like ---..
            let result = this.state.morseToAlpha[element];
        }
        return ;
    }
    reverseIt(){
        const result = {};
        for(var key in alphaToMorse){
            if(!result.hasOwnProperty(key)){
                result[alphaToMorse[key]] = key;
            }
        }
        return result;
    }
    

    render(){
        return(
            <div>
            <h1 className="header">MORSE CODE GAME</h1>
                <div className="container card">
                <h4><label for="typeAnything">Type anything in the box below to converts text into Morse code: </label></h4>
                <input type="text" id="typeAnything" placeholder="Type anything you want here"
                onChange={(e) => {this.setState({typeSomething: e.target.value})}}/>
                <button onClick={() => {
                    this.setState({morseCodeResult: search(this.state.typeSomething)});
                }}>See the outcome of Morse Code</button>
                <h4><p>Morse Code Result: {this.state.morseCodeResult}</p></h4>

                <h4><label for="typeMorseCode">Reverse - Type the Morse code to translate into text </label></h4>
                <input type="text" id="typeMorseCode" placeholder="Type Morse Code you want here"
                onChange={(e) => {this.setState({typeMorseCode: e.target.value})}}/>
                <button onClick={() => {
                    this.setState({textResult: search(this.state.typeMorseCode)});
                }}>See what does it means</button>
                <h4><p>Text Result: {this.state.textResult}</p></h4>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/International_Morse_Code.svg/1200px-International_Morse_Code.svg.png"/>
            </div>
        );
    }
}
export default App
