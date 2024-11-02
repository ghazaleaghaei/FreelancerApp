import Table from "../Shared/Table"
import TruncateText from "./TruncateText"
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
                        <Table.Row key={project.id}>
                            <td>{index + 1}</td>
                            <td>{TruncateText(project.title, 30)}</td>
                            <td>{project.category.title}</td>
                            <td>{project.budget}</td>
                            <td>{new Date(project.deadline).toLocaleDateString("en-UK")}</td>
                            <td>
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))
                                }
                            </td>
                            <td>{project.freelancer?.name || "_"}</td>
                            <td>
                                {
                                    project.status === "OPEN" ? (
                                        <span>open</span>
                                    ) :
                                        (
                                            <span>close</span>
                                        )
                                }
                            </td>
                            <td>...</td>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}
export default ProjectsTable
