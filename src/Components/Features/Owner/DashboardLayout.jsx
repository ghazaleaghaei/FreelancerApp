import DashboardHeader from "../../Shared/DashboardHeader"
import useOwnerProjects from "./Projects/useOwnerProjects"
import Stats from "./Stats"

function DashboardLayout() {
    const { projects, isLoading } = useOwnerProjects()
    if (isLoading) return <div>loading....</div>
    return (
        <div>
            <DashboardHeader />
            <Stats projects={projects} />
        </div>
    )
}
export default DashboardLayout
