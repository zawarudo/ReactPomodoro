var React = require('react');
var Pomodoro = require('./pomodoro');

var element = React.createElement(Pomodoro, {});
React.render(element, document.querySelector('.container'));
