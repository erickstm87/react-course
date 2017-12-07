'use strict';

console.log('hello again');

//JSX - Javascript XML
// var template = (
// <div>
//     <h1>more jsx stuff right?</h1>
//     <p>This is some info</p>
//     <ol>
//         <li>list one</li>
//         <li>list two</li>
//     </ol>
// </div>
// );

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Tomas Erickson'
  ),
  React.createElement(
    'p',
    null,
    'Age: 30'
  ),
  React.createElement(
    'p',
    null,
    'Location: Boulder'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
