import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";

function Header() {
    return <div class="bg-color3/10 p-4 flex gap-8 items-center dark:bg-slate-950 dark:text-white">
        <UserAvatar />
        <HeaderMenu />
    </div>
}
export default Header
