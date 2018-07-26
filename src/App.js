import React, { Component } from 'react';

function search(typeanything){
    let sumMorseCode = '';
    for(var i = 0; i < typeanything.length; i++){
        let element = typeanything[i];
        var result;
        switch(element){
            case 'A':
            case 'a':
                result = ".-";
                break;
            case 'b':
            case 'B':
                result = "-...";
                break;
            case 'c':
            case 'C':
                result = "-.-.";
                break;
            case 'd':
            case 'D':
                result = "-..";
                break;
            case 'e':
            case 'E':
                result = ".";
                break;
            case 'f':
            case 'F':
                result = "..-.";
                break;
            case 'g':
            case 'G':
                result = "--.";
                break;
            case 'h':
            case 'H':
                result = "....";
                break;
            case 'i':
            case 'I':
                result = "..";
                break;
            case 'j':
            case 'J':
                result = ".---";
                break;
            case 'k':
            case 'K':
                result = "-.-";
                break;
            case 'l':
            case 'L':
                result = ".-..";
                break;
            case 'm':
            case 'M':
                result = "--";
                break;
            case 'n':
            case 'N':
                result = "-.";
                break;    
            case 'o':
            case 'O':
                result = "---";
                break;
            case 'p':
            case 'P':
                result = ".--.";
                break;
            case 'q':
            case 'Q':
                result = "--.-";
                break;

        }
        sumMorseCode += result;
    }
    return sumMorseCode;
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            typeSomething: '',
            morseCodeResult: '',
        }
    }

    render(){
        return(
            <div>
                <input type="text" id="typeanything" placeholder="Type anything you want here"
                onChange={(e) => {this.setState({typeSomething: e.target.value})}}/>
                <button onClick={() => {
                    this.setState({morseCodeResult: search(this.state.typeSomething)});
                }}>Enter</button>
                <p>Morse Code Result: {this.state.morseCodeResult}</p>
            </div>
        );
    }
}
export default App
