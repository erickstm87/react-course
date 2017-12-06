console.log('hello again');

//JSX - Javascript XML
//var template = <p>more jsx stuff</p>;
var template = React.createElement(
    'h1',
    { id: 'someid' },
    'this is jsx stuff'
  );
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);