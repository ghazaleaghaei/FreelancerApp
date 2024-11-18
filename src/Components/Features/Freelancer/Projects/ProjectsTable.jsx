import Table from "../../../Shared/Table"
import ProjectRow from "./ProjectRow"
import useProjects from "./useProjects"

function ProjectsTable() {
    const { isLoading, projects } = useProjects()

    if (isLoading) return <p>loading....</p>
    if (!projects.length) return <p> not found projects</p>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>project title</th>
                <th>budget</th>
                <th>deadline</th>
                <th>status</th>
                <th>operation</th>
            </Table.Header>
            <Table.Body>
                {
                    projects.map((project, index) => (
                        <ProjectRow
                            project={project}
                            index={index}
                            key={project._id}
                        />
                    ))
                }
            </Table.Body>
        </Table>
    )
}
export default ProjectsTable
