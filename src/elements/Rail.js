import React, { PropTypes, Component } from 'react';
import rail from 'semantic-ui-css/components/rail.css';
import withStyles from '../utils/withStyles'
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

@withStyles(rail)
class Rail extends React.Component {
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
	var componentClass = classNames('ui rail', this.props.className);

    return (
      <div {...this.props} className={componentClass}>
	  	{this.props.children}
	  </div>
    )
  };
}

Rail.propTypes = propTypes;
Rail.defaultProps = defaultProps;

export default Rail;
