import React, { PropTypes, Component } from 'react';
import grid from 'semantic-ui-css/components/grid.css';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

class Grid extends React.Component {
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
        var componentClass = classNames('ui grid', this.props.className);
        return (
            <div className={componentClass}>
                {this.props.children}
            </div>
        )
    };
}
Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
