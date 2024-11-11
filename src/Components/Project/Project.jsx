import ProjectHeader from "./ProjectHeader"
import ProposalsTable from "./ProposalsTable"
import useProject from "./useProject"

function Project() {
    const { project, isLoading } = useProject()

    if (isLoading) return <div>loading...</div>

    return <section>
        <ProjectHeader project={project} />
        <ProposalsTable proposals={project?.proposals} />
    </section>
}
export default Project
