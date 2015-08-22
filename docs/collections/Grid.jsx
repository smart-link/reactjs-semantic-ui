/**
 * Created by youngmoon on 8/22/15.
 */

var Grid = RSU.Grid,
    Column  = RSU.Column,
    Row  = RSU.Row;

window.GridSystem = React.createClass({
    render: function () {
        return (
            <Grid className="four column">
                <Row>
                    <Column>Row1</Column>
                    <Column>Row1</Column>
                    <Column>Row1</Column>
                </Row>
                <Column>Row2</Column>
                <Column>Row2</Column>
                <Column>Row2</Column>
                <Column>Row2</Column>
            </Grid>
        );
    }
});