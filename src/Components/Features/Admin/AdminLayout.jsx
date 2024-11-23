import AppLayout from "../../Layout/AppLayout"
import CustomNavLink from "../../Layout/CustomNavLink"
import Sidebar from "../../Layout/Sidebar"

function AdminLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavLink to="dashboard">
                    <span>dashboard</span>
                </CustomNavLink>
                <CustomNavLink to="users">
                    <span>users</span>
                </CustomNavLink>
                <CustomNavLink to="projects">
                    <span>projects</span>
                </CustomNavLink>
                <CustomNavLink to="proposals">
                    <span>proposals</span>
                </CustomNavLink>
            </Sidebar>
        </AppLayout>
    )
}
export default AdminLayout
