console.log('hello again');

var app = {
    title: 'Brave New World',
    subtitle: 'life is lousy'
}


//JSX - Javascript XML
var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>list one</li>
        <li>list two</li>
    </ol>
</div>
);

var user = {
    name: 'Thursday',
    age: 50,
    location: 'Indy'
}

var templateTwo = (
    <div>
      <h1>{user.name.toUpperCase()}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>  
    </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);