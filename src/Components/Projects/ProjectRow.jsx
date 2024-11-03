import Modal from "../Shared/Modal"
import Table from "../Shared/Table"
import TruncateText from "./TruncateText"

function ProjectRow({ project, index }) {
    return <Table.Row key={project._id}>
        <td>{index + 1}</td>
        <td class="text-nowrap">{TruncateText(project.title, 30)}</td>
        <td>{project.category.title}</td>
        <td>{project.budget}</td>
        <td>{new Date(project.deadline).toLocaleDateString("en-UK")}</td>
        <td class="flex flex-wrap gap-2">
            {project.tags.map(tag => (
                <span
                    class="bg-color3/20 rounded-full py-1 px-2 text-white"
                    key={tag}
                >
                    {tag}
                </span>
            ))
            }
        </td>
        <td class="text-nowrap">{project.freelancer?.name || "_"}</td>
        <td>
            {
                project.status === "OPEN" ? (
                    <span class="bg-color2/50 text-white rounded-full px-2 py-1">
                        open
                    </span>
                ) :
                    (
                        <span class="bg-color3/50 text-white rounded-full px-2 py-1">
                            close
                        </span>
                    )
            }
        </td>
        <td>
            <button>delete</button>
            <Modal></Modal>
            <button>edit</button>
        </td>
    </Table.Row>
}
export default ProjectRow
