import { useState } from "react"
import useToggleProjectStatus from "./useToggleProjectStatus"

function ToggleProjectStatus({ project }) {

    const isOpen = project.status === "OPEN" ? true : false

    const { toggleProjectStatus, isUpdating } = useToggleProjectStatus()
    const toggleHandler = () => {
        const status = project.status === "OPEN" ? "ClOSED" : "OPEN";
        toggleProjectStatus({
            id: project._id,
            data: { status },
        }
        )
    }

    return <div>
        {isUpdating ? <div>loading...</div> :
            <label class="relative inline-flex items-center cursor-pointer">
                <div
                    class={`w-11 h-6 rounded-full ${isOpen ? "after:translate-x-full bg-color2/50" : "bg-gray-300"} after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-0.5 after:bg-white after:border after:rounded-full after:w-5 after:aspect-square after:transition-all`}
                    onClick={toggleHandler}
                >
                </div>
                <span class="px-2 py-1">
                    open
                </span>

            </label>
        }
    </div >
}
export default ToggleProjectStatus
