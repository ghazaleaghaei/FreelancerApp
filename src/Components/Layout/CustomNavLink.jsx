import { NavLink } from "react-router-dom"

function CustomNavLink({ to, children }) {
    return (
        <li class="w-full">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? "text-color2 bg-color1/10 flex w-full p-2 rounded-md dark:bg-color1 dark:text-blue-100" : "flex w-full p-2 rounded-md"}
            >
                {children}
            </NavLink>
        </li>
    )
}
export default CustomNavLink
