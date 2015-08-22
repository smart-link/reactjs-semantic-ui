import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

class Row extends React.Component {
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
        var componentClass = classNames('column row', this.props.className);
        return (
            <div {...this.props} className={componentClass}>
                {this.props.children}
            </div>
        )
    };
}
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
