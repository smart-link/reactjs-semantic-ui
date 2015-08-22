import React, { Component, PropTypes } from 'react';
import card from 'semantic-ui-css/components/card.css';
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

class Card extends Component {
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
      'ui',
      'card',
      this.props.className
    );

    return (
      <div {...this.props} className={componentClass}>{this.props.children}</div>
    )
  };
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
