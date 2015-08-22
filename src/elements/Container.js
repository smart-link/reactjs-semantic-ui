import React, { PropTypes, Component } from 'react';
import container from 'semantic-ui-css/components/container.css';
import withStyles from '../utils/withStyles';
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

@withStyles(container)
class Container extends React.Component {
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
	var componentClass = classNames('ui container', this.props.className);

    return (
      <div {...this.props} className={componentClass}>
	  	{this.props.children}
	  </div>
    )
  };
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
