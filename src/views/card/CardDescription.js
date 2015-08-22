import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string
};

const defaultProps = {
	className: ''
};

class CardDescription extends Component {
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
      'description',
      this.props.className
    );

    return (
      <div {...this.props} className={componentClass}>{this.props.children}</div>
    )
  };
}

CardDescription.propTypes = propTypes;
CardDescription.defaultProps = defaultProps;

export default CardDescription;
