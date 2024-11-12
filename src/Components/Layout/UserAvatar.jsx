import useUser from "../Auth/useUser"

function UserAvatar() {
    const { user, isLoading } = useUser()
    return <div class="flex gap-2 items-center">
        <img
            src="/user.webp"
            alt="user-account"
            class="w-10 aspect-square rounded-full border-2 border-color2/50"
        />
        <span>{user?.name}</span>
    </div>
}
export default UserAvatar
