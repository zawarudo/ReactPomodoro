var React = require('react');

module.exports = React.createClass({
	getTimeRemaining : function (time){
	  var seconds = time % 60,
	  		minutes = Math.floor(time/60);
	  return {
	    'total': time,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	},

	render: function() {
		var time = this.props.currTime;
		timeFormat = this.getTimeRemaining(time);

		return <div className=''>
			<h1>
				{timeFormat.minutes} : {timeFormat.seconds < 10 ? '0' + timeFormat.seconds : timeFormat.seconds}
			</h1>
		</div>
	}
});