'use strict';

console.log('hello again');

var app = {
    title: 'Brave New World',
    subtitle: 'life is lousy'

    //JSX - Javascript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'list one'
        ),
        React.createElement(
            'li',
            null,
            'list two'
        )
    )
);

var user = {
    name: 'Thursday',
    age: 50,
    location: 'Indy'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
