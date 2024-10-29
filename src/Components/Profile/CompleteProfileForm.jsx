import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { completeProfile } from "../../Services.jsx/AuthService"
import { useNavigate } from "react-router-dom"

function CompleteProfileForm() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()
    const { isPending, mutateAsync, } = useMutation({
        mutationFn: completeProfile
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateAsync({
                name,
                email,
                role,
            })
            console.log(data.message)

            //we use return to finish the function processing right here and break the function
            if (data.user.status !== 2) {
                navigate("/")
                console.log("your profile is waiting for accept");
                return;
            }

            if (data.user.role === "OWNER") return navigate("/owner");
            if (data.user.role === "FREELANCER") return navigate("/freelancer");
        } catch (error) {
            console.log(error?.response?.data?.message)
        }

    }

    return <form
        class="max-w-5xl mx-auto flex flex-col items-center gap-8 my-20 bg-color1/10 p-8 rounded-xl text-color3"
        onSubmit={handleSubmit}
    >
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
            <label class="shadow-xl p-1 cursor-pinter" htmlFor="OWNER">
                owner
            </label>
            <input
                class="cursor-pointer w-5 aspect-square accent-color2"
                value="OWNER"
                onChange={(e) => setRole(e.target.value)}
                type="radio"
                name="role"
                id="OWNER"
                checked={role === "OWNER"}
            />
            <label class="shadow-xl p-1 cursor-pointer" htmlFor="FREELANCER">
                freelancer
            </label>
            <input
                class=""
                value="FREELANCER"
                onChange={(e) => setRole(e.target.value)}
                type="radio"
                name="role"
                id="FREELANCER"
                checked={role === "FREELANCER"}
            />
        </div>
        <button
            class="w-full bg-color2/50 p-2 rounded-xl text-white"
            disabled={isPending}
        >
            submit
        </button>
    </form>
}
export default CompleteProfileForm
