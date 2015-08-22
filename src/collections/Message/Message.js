import React, { PropTypes, Component } from 'react';
import message from '../../../node_modules/semantic-ui-css/components/message.css';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    className: ''
};

class Message extends React.Component {
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
        var componentClass = classNames('ui message', this.props.className);
        return (
            <div {...this.props} className={componentClass}>
                {this.props.children}
            </div>
        )
    };
}
Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
