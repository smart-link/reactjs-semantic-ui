/**
 * Created by youngmoon on 8/22/15.
 */

var Menu = RSU.Menu;

window.MenuSystem = React.createClass({
    render: function () {
        return (
            <Menu className="three item">
                <a className="active item"> Developer </a>
                <a className="item"> Designer </a>
                <a className="item"> Product Manager </a>
            </Menu>
        );
    }
});