import AppLayout from "../../Layout/AppLayout"
import CustomNavLink from "../../Layout/CustomNavLink"
import Sidebar from "../../Layout/Sidebar"

function OwnerLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavLink to="/owner/dashboard">
                    <span>dashboard</span>
                </CustomNavLink>
                <CustomNavLink to="/owner/projects">
                    <span>projects</span>
                </CustomNavLink>
            </Sidebar>
        </AppLayout>
    )
}
export default OwnerLayout
