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
var addOne = function addOne() {
    count += 1;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count -= 1;
    renderCounterApp();
};
var resetCount = function resetCount() {
    count = 0;
    renderCounterApp();
};
var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

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
            { onClick: addOne },
            ' +1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: resetCount },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
