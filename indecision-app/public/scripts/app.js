'use strict';

console.log('hello again');

var app = {
    title: 'Indecision App',
    subtitle: 'What Should I do Hal?',
    options: []
};
var appRoot = document.getElementById('app');

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    var option = app.options[randomNum];
    console.log(option);
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        //if string is empty that's falsey so this if statement won't run
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
    }
    renderTemplateApp();
};

var emptyArray = function emptyArray() {
    app.options = [];
    renderTemplateApp();
};

var renderTemplateApp = function renderTemplateApp() {
    //JSX - Javascript XML
    var template = React.createElement(
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: emptyArray },
            'Remove All Entries'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option + 1 },
                    option
                );
            })
        )
    );

    ReactDOM.render(template, appRoot);
};

renderTemplateApp();
