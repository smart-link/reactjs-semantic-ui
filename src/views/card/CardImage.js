import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
  src: PropTypes.string
};

const defaultProps = {
	className: ''
};

class CardImage extends Component {
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
      'image',
      this.props.className
    );

    return (
      <div {...this.props} className={componentClass}>
        <img src={this.props.src}/>
      </div>
    )
  };
}

CardImage.propTypes = propTypes;
CardImage.defaultProps = defaultProps;

export default CardImage;
