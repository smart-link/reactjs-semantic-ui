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
      <div {...this.props} className={componentClass}>
	  	{this.props.children}
	  </div>
    )
  };
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
