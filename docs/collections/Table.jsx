/**
 * Created by youngmoon on 8/22/15.
 */

var Table = RSU.Table;

window.TableSystem = React.createClass({
    render: function () {
        var arrayList = [
            1,2,3
        ];
        return (
            <Table className="celled striped">
                <thead>
                <tr>
                    <th colSpan={3}>
                        Git repository
                    </th>
                </tr>
                <tbody>
                {
                    arrayList.map(function (data) {
                        return (
                            <tr>
                                <td>
                                    <i className="right aligned collapsing"> {data} </i>
                                </td>
                                <td>
                                    {data} haha
                                </td>
                                <td>
                                    {data} hihi
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
                </thead>
            </Table>
        );
    }
});