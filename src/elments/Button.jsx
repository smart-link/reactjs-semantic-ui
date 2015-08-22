import React from 'react';
import button from 'semantic-ui-css/components/button.css';
import withStyles from '../utils/withStyles'

const propTypes = {
};

const defaultProps = {
};

@withStyles(button)
class Button extends React.Component {
	constructor(props) {
        super(props);
  };

	render() {
		return (
			<div>
        hello dowon
			</div>
		)
	};
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
