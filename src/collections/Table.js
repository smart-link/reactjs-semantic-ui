import React, { PropTypes, Component } from 'react';
import table from 'semantic-ui-css/components/table.css';
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
            <div className={componentClass}>
                {this.props.children}
            </div>
        )
    };
}
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
