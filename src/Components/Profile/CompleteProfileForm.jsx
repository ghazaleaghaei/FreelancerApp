import { useState } from "react"

function CompleteProfileForm() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    return <form class="max-w-5xl mx-auto flex flex-col items-center gap-8 my-20 bg-color1/10 p-8 rounded-xl text-color3">
        <div class="w-full">
            <label class="">
                name
            </label>
            <input
                class="w-full rounded-xl p-2 mt-2 outline-none focus:shadow-lg focus:shadow-color3 duration-300 drop-shadow-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div class="w-full">
            <label class="">
                email
            </label>
            <input
                class="w-full rounded-xl p-2 mt-2 outline-none focus:shadow-lg focus:shadow-color3 duration-300 drop-shadow-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div class="flex gap-2">
            <label class="shadow-xl p-1" htmlFor="OWNER">
                owner
            </label>
            <input
                class=""
                value="OWNER"
                onChange={(e) => setRole(e.target.value)}
                type="radio"
                name="role"
                id="OWNER"
                checked={role === "OWNER"}
            />
            <label class="shadow-xl p-1" htmlFor="ADMIN">
                admin
            </label>
            <input
                class=""
                value="ADMIN"
                onChange={(e) => setRole(e.target.value)}
                type="radio"
                name="role"
                id="ADMIN"
                checked={role === "ADMIN"}
            />
        </div>
        <button class="w-full bg-color2/50 p-2 rounded-xl text-white">
            submit
        </button>
    </form>
}
export default CompleteProfileForm
