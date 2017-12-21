import React from 'react';
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleOptions = this.handleOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            //options: ['thing one', 'thing two', 'thing five']
            options: []
        }
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));            
            }
        }
        catch(e){
            //do nothing at all
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    handleDeleteOptions(){
        console.log('called');
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(option){
        this.setState((prevState) => ({
            options: prevState.options.filter((word) => word !== option)
        }));
    }
    handleOptions(){
        console.log('called');
        const randomNum = Math.floor((Math.random() * this.state.options.length));
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return 'enter a valid option';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'entry already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render(){
        const subtitle = 'Ask the machine';
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handleOptions={this.handleOptions}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

export default IndecisionApp;