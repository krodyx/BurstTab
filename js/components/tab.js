var Tab = React.createClass({displayName: "Tab",
	shortenString: function(str) {
		// modify threshold here
		var threshold = 55;

		if(str.length > threshold)
			return str.substring(0, threshold) + '...';
		else
			return str;
	},
	handleTabClick: function() {
		switchToTab(this.props.id);
	},
	handleRemoveClick: function() {
		this.props.removeClick(this);	
		return false; 	// to prevent handleTabClick from firing
	},
	render: function() {
		var title = this.shortenString(this.props.title);
		var favicon = 'chrome://favicon/' + this.props.url;
		return (
			React.createElement("li", {onClick: this.handleTabClick}, 
				React.createElement("img", {src: favicon, className: "left"}), 
				React.createElement("span", null, title), 
				React.createElement("img", {src: "/images/remove.png", className: "right", onClick: this.handleRemoveClick})
			)	
		)
	}
});