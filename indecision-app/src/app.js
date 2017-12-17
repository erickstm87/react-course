class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleOptions = this.handleOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            //options: ['thing one', 'thing two', 'thing five']
            options: []
        }
    }
    handleDeleteOptions(){
        console.log('called');
        this.setState(() => {
            return {
                options: []
            } 
        })
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
        this.setState((prevState) => {
            return{
                options: prevState.options.concat(option)
            }
        })
    }
    render(){
        const title = 'The Indecision';
        const subtitle = 'Ask the machine';
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handleOptions={this.handleOptions}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
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
            <button onClick={this.props.handleOptions} disabled={!this.props.hasOptions}>
                What should i do?
            </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions} disabled={this.props.options.length < 1}>Remove Options</button>         
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
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return { error }
        })
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Submit Option</button>
                </form>   
            </div>        
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 