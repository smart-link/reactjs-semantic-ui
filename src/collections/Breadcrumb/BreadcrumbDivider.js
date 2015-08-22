import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

class BreadcrumbDivider extends React.Component {
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
        var componentClass = classNames('divider', this.props.className);
        return (
            <span {...this.props} className={componentClass}>
                {this.props.children}
            </span>
        )
    };
}
BreadcrumbDivider.propTypes = propTypes;
BreadcrumbDivider.defaultProps = defaultProps;

export default BreadcrumbDivider;
