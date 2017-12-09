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