import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 
//ReactDOM.render(<User name='tomas' age={30}/>, document.getElementById('app')); 

class OldSyntax {
    constructor(){
        this.name = 'tomas';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// ----------------------
  
class NewSyntax {
    name = 'randall';
    getGreeting = () => {
        return `Hello my name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGreeting = newSyntax.getGreeting;
console.log(newGreeting());