import LogoutIcon from "../../Svg/LogoutIcon"
import useLogout from "./useLogout"

function Logout() {
    const { logout, isPending } = useLogout()
    return isPending ? (
        <div>loading....</div>
    )
        : (<div>
            <button class="font-xl" onClick={logout}>
                <LogoutIcon class="w-7 aspect-square fill-color3 dark:fill-red-300" />
            </button>
        </div>
        )
}
export default Logout
