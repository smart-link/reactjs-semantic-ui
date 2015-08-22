/**
 * Created by youngmoon on 8/22/15.
 */

var Form = RSU.Form;

window.FormSystem = React.createClass({
    render: function () {
        return (
            <Form>
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name." />
                </div>
            </Form>
        );
    }
});