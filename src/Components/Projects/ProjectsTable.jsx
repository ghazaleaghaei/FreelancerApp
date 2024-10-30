import useOwnerProjects from "./useOwnerProjects"

function ProjectsTable() {
    const { isLoading, projects } = useOwnerProjects()

    return <div>projects table</div>
}
export default ProjectsTable
