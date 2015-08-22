import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
	desc: PropTypes.string
};

const defaultProps = {
	className: ''
};

class CardHeader extends Component {
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
    var componentClass = classNames(
      'header',
      this.props.className
    );

    return (
      <a className={componentClass}>{this.props.desc}</a>
    )
  };
}

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
