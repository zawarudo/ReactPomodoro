var React = require('react');

module.exports = React.createClass({
	pausePlayIcon : function() {
		var button = null;
		var playButton = <span className="glyphicon glyphicon-play"></span>
		var pauseButton = <span className="glyphicon glyphicon-pause"></span>
		if(this.props.paused) {
			button = playButton;
		} else {
			button = pauseButton;
		}

		return button;
	},
	render: function() {
		return (
			<div className='btn-group'>
				<button type='button' 
					className='btn btn-default ' 
					onClick={this.pausePlayClicked}
				>
					{this.pausePlayIcon()}&nbsp;
				</button>
				<button type='button' 
					className='btn btn-default '
					data-time={25 * 60}
					onClick={this.timeChangerClicked}

				>
					Pomodoro
				</button>			
				<button type='button' 
					className='btn btn-default '
					data-time={5 * 60}
					onClick={this.timeChangerClicked}

				>
					Short Break
				</button>
				<button type='button' 
					className='btn btn-default '
					data-time={10 * 60}
					onClick={this.timeChangerClicked}

				>
					Long Break
				</button>
			</div>
		)
	},

	pausePlayClicked: function(event) {
		var newState = {
			paused: !this.props.paused
		};
		this.props.handleBtnClick(newState)
	},

	timeChangerClicked: function(event) {
		var time = Number(event.target.getAttribute('data-time'));
		
		if(isNaN(time)) { return; }

		var newState = {
			time: time,
			paused: false
		};

		this.props.handleBtnClick(newState);
	}
});