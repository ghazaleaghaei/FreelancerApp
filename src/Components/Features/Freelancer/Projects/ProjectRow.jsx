import Table from "../../../Shared/Table"
import TruncateText from "../../../Shared/TruncateText"
import Settings from "../../../../Svg/Settings"
import Modal from "../../../Shared/Modal"
import { useState } from "react"
import CreateProposalForm from "./CreateProposalForm"

const projectStatus = {
    OPEN: {
        label: "open",
        class: "bg-green-600"
    },
    ClOSED: {
        label: "close",
        class: "bg-red-700"
    }
}
function ProjectRow({ project, index }) {
    const [isOpen, setIsOpen] = useState(false)
    console.log(project)

    return <Table.Row key={project._id}>
        <td>{index + 1}</td>
        <td class="text-nowrap">{TruncateText(project.title, 30)}</td>
        <td>{project.budget}</td>
        <td>{new Date(project.deadline).toLocaleDateString("en-UK")}</td>
        <td>
            <span class={`rounded-full px-3 py-1 text-white ${projectStatus[project.status]?.class}`}>
                {projectStatus[project.status]?.label}
            </span>
        </td>
        <td>
            <button
                onClick={() => setIsOpen(true)}
                class="disabled:opacity-50"
                disabled={project.status == "ClOSED"}
            >
                <Settings class="w-10 aspect-square fill-color2" />
            </button>
            <Modal
                open={isOpen}
                title={`request to do ${project.title} project`}
                onClose={() => { setIsOpen(false) }}
            >
                <CreateProposalForm
                    onClose={() => setIsOpen(false)}
                    projectId={project._id}
                    status={project.status}
                />

            </Modal>
        </td>
    </Table.Row>
}
export default ProjectRow
