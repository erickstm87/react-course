console.log('hello again');

const app = {
    title: 'Indecision App',
    subtitle: 'What Should I do Hal?',
    options: []
}
const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){ //if string is empty that's falsey so this if statement won't run
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
    }
    renderTemplateApp();
};

const emptyArray = () => {
    app.options = [];
    renderTemplateApp();
}

const renderTemplateApp = () => 
{
    //JSX - Javascript XML
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <button onClick={emptyArray}>Remove All Entries</button>
        <ol>
            <li>list one</li>
            <li>list two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add Option</button>
        </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
}

renderTemplateApp();