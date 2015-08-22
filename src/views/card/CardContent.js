import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

class CardContent extends Component {
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
      this.props.className,
			'content'
    );

    return (
      <div {...this.props} className={componentClass}>{this.props.children}</div>
    )
  };
}

CardContent.propTypes = propTypes;
CardContent.defaultProps = defaultProps;

export default CardContent;
