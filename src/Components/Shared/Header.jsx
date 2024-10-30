import useUser from "../Auth/useUser"

function Header() {
    const { data } = useUser();
    return <div class="bg-color3/10 p-4">app header</div>
}
export default Header
