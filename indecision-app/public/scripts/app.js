'use strict';

console.log('hello again');

//JSX - Javascript XML
var template = React.createElement(
  'h1',
  null,
  'more jsx stuff right?'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
