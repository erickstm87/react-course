'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleOptions = _this.handleOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            //options: ['thing one', 'thing two', 'thing five']
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
            console.log('componentDidUpdate');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            console.log('called');
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (word) {
                        return word !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleOptions',
        value: function handleOptions() {
            console.log('called');
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'enter a valid option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'entry already exists';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Ask the machine';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Header, { subtitle: subtitle }),
                _react2.default.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handleOptions: this.handleOptions
                }),
                _react2.default.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                _react2.default.createElement(AddOptions, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(_react2.default.Component);

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }


var Header = function Header(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && _react2.default.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'The Indecision'
};

var Action = function Action(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'button',
            { onClick: props.handleOptions, disabled: !props.hasOptions },
            'What should i do?'
        )
    );
};

var Options = function Options(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'button',
            { onClick: props.handleDeleteOptions, disabled: props.options.length < 1 },
            'Remove Options'
        ),
        props.options.length === 0 && _react2.default.createElement(
            'p',
            null,
            'Please add an option to get started'
        ),
        props.options.map(function (element) {
            return _react2.default.createElement(Option, {
                key: element,
                optionText: element,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.optionText,
        _react2.default.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
                //{props.handleDeleteOption}
            },
            'remove'
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.error && _react2.default.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    _react2.default.createElement('input', { type: 'text', name: 'option' }),
                    _react2.default.createElement(
                        'button',
                        null,
                        'Submit Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(_react2.default.Component);

// const User = (props) => { //these stateless functional components are faster than class based state components
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p> 
//         </div>
//     )
// }

_reactDom2.default.render(_react2.default.createElement(IndecisionApp, null), document.getElementById('app'));
//ReactDOM.render(<User name='tomas' age={30}/>, document.getElementById('app'));
