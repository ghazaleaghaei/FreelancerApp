import { useState } from "react"
import ProjectsTable from "./ProjectsTable"
import CreateProjectForm from "./CreateProjectForm"
import Modal from "../../../Shared/Modal"

function Projects() {
    const [isAddOpen, setIsAddOpen] = useState(false)
    return <>
        <div class="flex justify-between m-4">
            <h1>your projects</h1>
            <button
                class="py-1.5 px-3 rounded-full bg-color3 text-white"
                onClick={() => { setIsAddOpen(true) }}
            >
                add new project +
            </button>
            <Modal
                open={isAddOpen}
                title="add new project"
                onClose={() => { setIsAddOpen(false) }}
            >
                <CreateProjectForm
                    onClose={() => { setIsAddOpen(false) }}
                    disable={false}
                />
            </Modal>
        </div>
        <ProjectsTable />
    </>
}
export default Projects
