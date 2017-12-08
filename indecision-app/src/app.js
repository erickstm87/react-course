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

const templateTwo = (
    <div>
      <h1>This is my count: {count}</h1>
      <button id={someId} className='button'>+1</button>
    </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);