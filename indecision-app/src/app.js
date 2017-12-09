console.log('hello again');

const app = {
    title: 'Brave New World',
    subtitle: 'life is lousy',
    options: ['do one thing', 'do another']
}


//JSX - Javascript XML
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>list one</li>
        <li>list two</li>
    </ol>
</div>
);

let count = 0;
const addOne = () => {
    count += 1;
    renderCounterApp();
}
const minusOne = () => {
    count -= 1;
    renderCounterApp();
}
const resetCount = () => {
    count = 0;
    renderCounterApp();
}
const appRoot = document.getElementById('app')

const renderCounterApp = () => {

    const templateTwo = (
        <div>
        <h1>This is my count: {count}</h1>
        <button onClick={addOne}> +1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetCount}>reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();