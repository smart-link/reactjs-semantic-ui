/**
 * Created by youngmoon on 8/22/15.
 */

var Message = RSU.Message;

window.MessageSystem = React.createClass({
    render: function () {
        return (
            <Message className="icon">
                <i className="notched circle loading icon"></i>
                <div className="content">
                    <div className="header">
                        Please wait for the DJ.
                    </div>
                    <p>
                        We're fetching that musics for you.
                    </p>
                </div>
            </Message>
        );
    }
});