class IndecisionApp extends React.Component {
    render(){
        return(
            <div>
                <Header title='The Indecision' />
                <Action />
                <Options />
                <AddOptions />
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
                <Option /> 
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
                <p>a</p>
                <p>b</p>
                <p>c</p>
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

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Put your life into the hands of the machine</h2>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));