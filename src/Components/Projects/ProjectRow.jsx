import { useState } from "react"
import Modal from "../Shared/Modal"
import Table from "../Shared/Table"
import TruncateText from "./TruncateText"
import ConfirmDelete from "./ConfirmDelete"
import useRemoveProject from "./useRemoveProject"
import CreateProjectForm from "./CreateProjectForm"
import ToggleProjectStatus from "./ToggleProjectStatus"
import { Link } from "react-router-dom"

function ProjectRow({ project, index }) {

    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const { removeProject, isDeleting } = useRemoveProject()

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
            <ToggleProjectStatus project={project} />
        </td>
        <td class="h-full">
            <div class="flex h-full justify-center items-center gap-2">
                <>
                    <button
                        class="text-color2"
                        onClick={() => setIsEditOpen(true)}
                    >
                        edit
                    </button>
                    <Modal
                        open={isEditOpen}
                        title={`edit ${project.title}`}
                        onClose={() => { setIsEditOpen(false) }}
                    >
                        <CreateProjectForm
                            onClose={() => { setIsEditOpen(false) }}
                            projectToEdit={project}
                            disable={false}
                        />
                    </Modal>
                </>
                <>
                    <button
                        class="text-red-700"
                        onClick={() => setIsDeleteOpen(true)}
                    >
                        delete
                    </button>
                    <Modal
                        open={isDeleteOpen}
                        title={`delete ${project.title}`}
                        onClose={() => { setIsDeleteOpen(false) }}
                    >
                        <ConfirmDelete
                            resourceName={project.title}
                            onClose={() => { setIsDeleteOpen(false) }}
                            onConfirm={() => {
                                removeProject(project._id, {
                                    onSuccess: () => setIsDeleteOpen(false),
                                })
                            }}
                            disable={false}
                        />
                    </Modal>
                </>
            </div>
        </td>
        <td>
            <Link to={project._id}>
                &#9997;
            </Link>
        </td>
    </Table.Row>
}
export default ProjectRow
