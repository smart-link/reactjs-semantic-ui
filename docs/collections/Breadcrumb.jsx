/**
 * Created by youngmoon on 8/22/15.
 */

var Breadcrumb = RSU.Breadcrumb,
    BreadcrumbDivider = RSU.BreadcrumbDivider,
    BreadcrumbSection = RSU.BreadcrumbSection;

window.BreadcrumbSystem = React.createClass({
    render: function () {
        return (
            <Breadcrumb>
                <BreadcrumbSection> Home </BreadcrumbSection>
                <BreadcrumbDivider>/</BreadcrumbDivider>
                <BreadcrumbSection> bread </BreadcrumbSection>
                <BreadcrumbDivider>/</BreadcrumbDivider>
                <BreadcrumbSection> crumb </BreadcrumbSection>
            </Breadcrumb>
        );
    }
});