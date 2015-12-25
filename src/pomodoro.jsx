var React = require('react');
var Timer = require('./timer');
var Controls = require('./controls');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			time: 0,
			paused: true
		}
	},

	componentDidMount: function() {
		setInterval(this.tick, 1000);
	},

	tick : function() {
		if(this.state.paused) { return; }
		var newState = {},
				tickRate = 1;
				time = this.state.time - tickRate;

		if(time < 0) { time = 0; };
		
		if(time === 0) {
			newState.paused = true;
			this.alarmPlay();
		};

		newState.time = time;

		this.setState(newState);
	},

	alarmPlay: function() {
		var playerElement = this.refs.alarm.getDOMNode();
		playerElement.play();
	},

	render: function() {
		return <div className='text-center'>
			<Timer currTime={this.state.time}/>
			<Controls handleBtnClick={this.controlsBtnClicked} paused={this.state.paused}/>
			<audio ref='alarm' src='../audio/alarm.mp3'></audio>
		</div>
	},

	controlsBtnClicked: function(newState) {
		this.setState(newState);
	}
});