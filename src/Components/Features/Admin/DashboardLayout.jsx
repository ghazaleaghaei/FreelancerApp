import DashboardHeader from "../../Shared/DashboardHeader"
import useProjects from "../Freelancer/Projects/useProjects"
import useProposals from "../Freelancer/Proposals/useProposals"
import Stats from "./Stats"
import useUsers from "./useUsers"

function DashboardLayout() {
    const { proposals, isLoading1 } = useProposals()
    const { projects, isLoading2 } = useProjects()
    const { users, isLoading3 } = useUsers()
    if (isLoading1 || isLoading2 || isLoading3) return <div>loading....</div>
    return (
        <div>
            <DashboardHeader />
            <Stats
                proposals={proposals?.length}
                users={users?.length}
                projects={projects?.length}
            />
        </div>
    )
}
export default DashboardLayout
