class IndecisionApp extends React.Component {
    render(){
        const title = 'The Indecision';
        const subtitle = 'Ask the machine';
        let options = ['thing one', 'thing two', 'thing four']; 
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
    handlePick(){
        alert('handled');
    }
    render(){
        return (
            <div>
            <button onClick={this.handlePick}>What should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll(){
        this.props.options = [];
    }
    render(){
        return(
            <div>
                {
                   this.props.options.map((element) => <Option key={element} optionText={element}/>)
                }
                <button onClick={this.removeAll}>Remove Options</button>                
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
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' name='option' />
                    <button>Submit Option</button>
                </form>   
            </div>        
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 