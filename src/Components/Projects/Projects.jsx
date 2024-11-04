import ProjectsTable from "./ProjectsTable"

function Projects() {
    return <>
        <div class="flex justify-between m-4">
            <h1>your projects</h1>
            <button>add new project +</button>
        </div>
        <ProjectsTable />
    </>
}
export default Projects
