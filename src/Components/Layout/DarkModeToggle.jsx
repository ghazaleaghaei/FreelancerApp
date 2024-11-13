import DarkMode from "../../Svg/DarkMode"
import Light from "../../Svg/Light"
import { useDarkMode } from "../Context/DarkModeContext"

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <div>
            <button onClick={toggleDarkMode}>
                {
                    isDarkMode ?
                        <Light class="w-7 aspect-square fill-yellow-300" /> :
                        <DarkMode class="w-7 aspect-square fill-color2" />
                }
            </button>
        </div>
    )
}
export default DarkModeToggle
