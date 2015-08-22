import React, { PropTypes, Component } from 'react';
import icon from 'semantic-ui-css/components/icon.css';
import withStyles from '../utils/withStyles'
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

@withStyles(icon)
class Icon extends React.Component {
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
	var componentClass = classNames('ui icon', this.props.className);

    return (
	  <i {...this.props} className={componentClass}>
		{this.props.children}
  	  </i>
    )
  };
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
