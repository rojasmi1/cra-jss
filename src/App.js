import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Header from 'components/common/Header';

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background,
		height: '100%'
	}
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Header />
			</div>
		);
	}
}

export default injectSheet(styles)(App);
