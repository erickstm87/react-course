class IndecisionApp extends React.Component {
    render(){
        const title = 'The Indecision';
        const subtitle = 'Ask the machine';
        const options = ['thing one', 'thing two', 'thing four']; 
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
            <button>What should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render(){
        return(
            <div>
                {
                    this.props.options.map((element) => <Option key={element} optionText={element}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOptions extends React.Component {
    render(){
        return(
            <div>
                <p>Here is my addoptions component</p>    
            </div>        
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 