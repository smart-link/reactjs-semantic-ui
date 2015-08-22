import React, { PropTypes, Component } from 'react';
import list from 'semantic-ui-css/components/list.css';
import withStyles from '../utils/withStyles'
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

@withStyles(list)
class List extends React.Component {
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
	var componentClass = classNames('ui list', this.props.className);

    return (
      <div {...this.props} className={componentClass}>
	  	{this.props.children}
	  </div>
    )
  };
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;


const itemPropTypes = {
	className: PropTypes.string,
};

const itemDefaultProps = {
	className: ''
};

class Item extends React.Component {
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
	var componentClass = classNames('item', this.props.className);

    return (
      <div {...this.props} className={componentClass}>
	  	{this.props.children}
	  </div>
    )
  };
}

Item.propTypes = itemPropTypes;
Item.defaultProps = itemDefaultProps;

export default {
	List, Item
};
