import React, { PropTypes, Component } from 'react';
import button from 'semantic-ui-css/components/button.css';
import withStyles from '../utils/withStyles'

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

/*
	Ordering for React.createClass:

	displayName
	propTypes
	contextTypes
	childContextTypes
	mixins
	statics
	defaultProps
	getDefaultProps
	getInitialState
	getChildContext
	componentWillMount
	componentDidMount
	componentWillReceiveProps
	shouldComponentUpdate
	componentWillUpdate
	componentDidUpdate
	componentWillUnmount
	clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
	getter methods for render like getSelectReason() or getFooterContent()
	Optional render methods like renderNavigation() or renderProfilePicture()
	render
*/

@withStyles(button)
class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  componentWillMount() {};
  componentDidMount() {};
  componentWillReceiveProps(nextProps) {};
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  };
  componentWillUpdate(nextProps, nextState) {};
  componentDidUpdate(prevProps, prevState) {};
  componentWillUnmount() {}

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
