import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/Result';
import KeyPadComponent from "./components/KeyPad";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "0"
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var Result = this.state.result

        try {
            this.setState({
                result: (eval(Result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };


    render() {
        return (
            <div>
                <div>
                    <h1>Hello world</h1>
                    <h2>Hi</h2>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;