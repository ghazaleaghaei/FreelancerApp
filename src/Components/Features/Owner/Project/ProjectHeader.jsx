import useMoveBack from "../../../Hooks/useMoveBack"

function ProjectHeader({ project }) {
    const moveBack = useMoveBack()
    return <div class="flex gap-4 items-center">
        <h1>requests of {project.title}</h1>
        <button onClick={moveBack}>
            &#11157;
        </button>
    </div>
}
export default ProjectHeader
