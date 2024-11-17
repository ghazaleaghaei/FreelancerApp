import DashboardHeader from "./DashboardHeader"
import useProposals from "./Proposals/useProposals"
import Stats from "./Stats"

function DashboardLayout() {
    const { proposals, isLoading } = useProposals()
    if (isLoading) return <div>loading....</div>
    return (
        <div>
            <DashboardHeader />
            <Stats proposals={proposals} />
        </div>
    )
}
export default DashboardLayout
