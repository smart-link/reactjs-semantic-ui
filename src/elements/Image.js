import React, { PropTypes, Component } from 'react';
import image from 'semantic-ui-css/components/image.css';
import withStyles from '../utils/withStyles'
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string
};

const defaultProps = {
	className: ''
};


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
      <img {...this.props} className={componentClass}>
	  	{this.props.children}
	  </img>
    )
  };
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
