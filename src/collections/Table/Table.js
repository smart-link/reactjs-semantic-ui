import React, { PropTypes, Component } from 'react';
import table from '../../../node_modules/semantic-ui-css/components/table.css';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

class Table extends React.Component {
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
        var componentClass = classNames('ui table', this.props.className);
        return (
            <table {...this.props} className={componentClass}>
                {this.props.children}
            </table>
        )
    };
}
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
