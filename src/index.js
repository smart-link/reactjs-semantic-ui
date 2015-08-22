import React from 'react';
import Button from './elements/Button';
import Breadcrumb from './collections/Breadcrumb';

const RSU = {
    Button: Button,
    Breadcrumb: Breadcrumb
};

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Breadcrumb className="hello">
                    haha
                </Breadcrumb>
            </div>
        )
    }
});

React.render(<App />,
    document.getElementById('react-root'));


export default RSU;
