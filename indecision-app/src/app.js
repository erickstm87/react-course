console.log('hello again');

var app = {
    title: 'Brave New World',
    subtitle: 'life is lousy',
    options: ['do one thing', 'do another']
}


//JSX - Javascript XML
var template = (
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

var user = {
    name: 'Thursday',
    age: 50,
    location: 'Indy'
}

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    } 
}

var templateTwo = (
    <div>
      <h1>name: {user.name ? user.name[0].toUpperCase() + user.name.substring(1) : 'Anonymous'}</h1>
      {user.age >= 18 && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);