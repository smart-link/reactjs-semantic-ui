import React, { PropTypes, Component } from 'react';
import header from 'semantic-ui-css/components/header.css';
import withStyles from '../utils/withStyles'
import classNames from 'classnames';

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

@withStyles(header)
class Header extends React.Component {
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
	var componentClass = classNames('ui header', this.props.className);

    return (
      <div className={componentClass}>
	  	{this.props.children}
	  </div>
    )
  };
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
