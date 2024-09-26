import { useState } from "react"

function CompleteProfileForm() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    return <form>
        <div>
            <label class="shadow-xl p-1">
                name
            </label>
            <input
                class="outline-none rounded-xl p-2 text-color3 focus:outline focus:outline-color2 outline-offset-0 focus:shadow-xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label class="shadow-xl p-1">
                email
            </label>
            <input
                class="outline-none rounded-xl p-2 text-color3 focus:outline focus:outline-color2 outline-offset-0 focus:shadow-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
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
                checked={role === " ADMIN"}
            />
        </div>
    </form>
}
export default CompleteProfileForm
