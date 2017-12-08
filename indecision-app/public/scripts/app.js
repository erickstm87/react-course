'use strict';

console.log('hello again');

var app = {
    title: 'Brave New World',
    subtitle: 'life is lousy',
    options: ['do one thing', 'do another']

    //JSX - Javascript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

var count = 0;

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is my count: ',
        count
    ),
    React.createElement(
        'button',
        { id: someId, className: 'button' },
        '+1'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
