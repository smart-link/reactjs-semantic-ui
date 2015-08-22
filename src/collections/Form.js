import React, { PropTypes, Component } from 'react';
import form from 'semantic-ui-css/components/form.css';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

class Form extends React.Component {
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
        var componentClass = classNames('ui form', this.props.className);
        return (
            <div className={componentClass}>
                {this.props.children}
            </div>
        )
    };
}
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
