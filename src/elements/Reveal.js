import React, { PropTypes, Component } from 'react';
import reveal from 'semantic-ui-css/components/reveal.css';
import withStyles from '../utils/withStyles'
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

@withStyles(reveal)
class Reveal extends React.Component {
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
	var componentClass = classNames('ui reveal', this.props.className);

    return (
      <div {...this.props} className={componentClass}>
	  	{this.props.children}
	  </div>
    )
  };
}

Reveal.propTypes = propTypes;
Reveal.defaultProps = defaultProps;

export default Reveal;
