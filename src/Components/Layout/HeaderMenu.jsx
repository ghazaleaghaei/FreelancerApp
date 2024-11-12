import { Link } from "react-router-dom"
import DarkModeToggle from "./DarkModeToggle"
import Logout from "./Logout"

function HeaderMenu() {
    return <ul class="flex gap-4 items-center">
        <li>
            <Link to="dashboard">
                &#128100;
            </Link>
        </li>
        <li>
            <DarkModeToggle />
        </li>
        <li>
            <Logout />
        </li>
    </ul>
}
export default HeaderMenu
