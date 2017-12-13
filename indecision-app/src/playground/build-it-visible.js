const appRoot = document.getElementById('app');

let declared;
const flipSwitch = () => {
    declared = !declared;
    console.log('button was clicked');
    renderTemplate();
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={flipSwitch}>
                {declared ? 'Hide Details' : 'Show Details'}
            </button>
            {declared && (
                <p>Here are the deets</p>
            )}
        </div>
    )

    ReactDOM.render(template, appRoot);
}

renderTemplate();
//comment