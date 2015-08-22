import React, { PropTypes, Component } from 'react';
import flag from 'semantic-ui-css/components/flag.css';
import withStyles from '../utils/withStyles'
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

@withStyles(flag)
class Flag extends React.Component {
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
	var componentClass = classNames('flag', this.props.className);

    return (
      <i {...this.props} className={componentClass}>
		  {this.props.children}
	  </i>
    )
  };
}

Flag.propTypes = propTypes;
Flag.defaultProps = defaultProps;

export default Flag;
