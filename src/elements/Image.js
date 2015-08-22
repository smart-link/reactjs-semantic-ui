import React, { PropTypes, Component } from 'react';
import image from 'semantic-ui-css/components/image.css';
import withStyles from '../utils/withStyles'
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
	src: PropTypes.string
};

const defaultProps = {
	className: '',
	src: ''
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

@withStyles(image)
class Image extends React.Component {
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
	var componentClass = classNames('ui image', this.props.className);

    return (
      <img src={this.props.src} className={componentClass}>
	  	{this.props.children}
	  </img>
    )
  };
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
