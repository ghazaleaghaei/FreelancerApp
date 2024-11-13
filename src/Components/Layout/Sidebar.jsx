import { NavLink } from "react-router-dom"

function Sidebar() {
    return <div class="bg-color2/10 row-start-1 row-span-2 p-4 dark:bg-cyan-950 dark:text-blue-100">
        <ul class="flex flex-col gap-2">
            <li class="w-full">
                <NavLink
                    to="/owner/dashboard"
                    className={({ isActive }) =>
                        isActive ? "text-color2 bg-color1/10 flex w-full p-2 rounded-md dark:bg-color1 dark:text-blue-100" : "flex w-full p-2 rounded-md"}
                >
                    dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/owner/projects"
                    className={({ isActive }) =>
                        isActive ? "text-color2 bg-color1/10 flex w-full p-2 rounded-md dark:bg-color1 dark:text-blue-100" : "flex w-full p-2 rounded-md"}
                >
                    projects
                </NavLink>
            </li>
        </ul>
    </div>
}
export default Sidebar
