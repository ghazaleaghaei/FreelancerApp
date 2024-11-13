import { Link } from "react-router-dom"
import DarkModeToggle from "./DarkModeToggle"
import Logout from "./Logout"
import User from "../../Svg/User"

function HeaderMenu() {
    return <ul class="flex gap-4 items-stretch">
        <li class="flex">
            < Link to="dashboard" >
                <User class="w-7 aspect-square fill-color2 dark:fill-blue-300" />
            </Link >
        </li >
        <li class="flex">
            <DarkModeToggle />
        </li>
        <li class="flex">
            <Logout />
        </li>
    </ul >
}
export default HeaderMenu
