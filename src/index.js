import React from 'react';
import styles from 'semantic-ui-css/components/reset.css';
import withStyles from './utils/withStyles'

const propTypes = {
};

const defaultProps = {
};

@withStyles(styles)
class App extends React.Component {
	constructor(props) {
        super(props);
    };

	render() {
		return (
			<div>
			</div>
		)
	};
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
