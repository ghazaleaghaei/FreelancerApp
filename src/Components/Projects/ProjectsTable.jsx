import Table from "../Shared/Table"
import ProjectRow from "./ProjectRow"
import useOwnerProjects from "./useOwnerProjects"

function ProjectsTable() {
    const { isLoading, projects } = useOwnerProjects()

    if (isLoading) return <p>loading....</p>
    if (!projects.length) return <p> not found projects</p>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>project title</th>
                <th>category</th>
                <th>budget</th>
                <th>deadline</th>
                <th>tags</th>
                <th>freelancer</th>
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
