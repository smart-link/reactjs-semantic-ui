import React, { PropTypes, Component } from 'react';
import menu from '../../../node_modules/semantic-ui-css/components/menu.css';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

class Menu extends React.Component {
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
        var componentClass = classNames('ui menu', this.props.className);
        return (
            <div {...this.props} className={componentClass}>
                {this.props.children}
            </div>
        )
    };
}
Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
