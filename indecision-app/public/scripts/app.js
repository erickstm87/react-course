'use strict';

var appRoot = document.getElementById('app');

var declared = void 0;
var flipSwitch = function flipSwitch() {
    declared = !declared;
    console.log('button was clicked');
    renderTemplate();
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: flipSwitch },
            declared ? 'Hide Details' : 'Show Details'
        ),
        declared && React.createElement(
            'p',
            null,
            'Here are the deets'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();
