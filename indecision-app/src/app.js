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

var templateTwo = (
    <div>
      <h1>Tomas Erickson</h1>
      <p>Age: 30</p>
      <p>Location: Boulder</p>  
    </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);