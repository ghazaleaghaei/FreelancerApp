import useUser from "../Auth/useUser"
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";

function Header() {
    const { data } = useUser();
    return <div class="bg-color3/10 p-4 flex gap-8 items-center">
        <UserAvatar />
        <HeaderMenu />
    </div>
}
export default Header
