import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { getOtp } from "../../Services.jsx/AuthService"

function SendOTPForm() {

    const [phoneNumber, setPhoneNumber] = useState("")

    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: getOtp,
    })

    const sendOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateAsync({ phoneNumber })
            console.log(data.message)
        } catch (error) {
            console.log(error?.response?.data?.message)
        }
    }

    return <div class="bg-gradient-to-b from-color2/50 via-color1/50 to-color3/50 w-full max-w-lg h-96 p-4 rounded-2xl">
        <form
            class="flex flex-col gap-10 justify-center items-center h-full text-lg font-semibold"
            onSubmit={sendOtpHandler}
        >
            <label class="text-color3 shadow-md px-4">
                phone number
            </label>
            <input
                type="text"
                class="rounded-xl p-2 outline-none text-color2 focus:shadow-lg focus:shadow-color3 duration-300"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
                class="bg-color1/50 rounded-xl p-1 w-1/3 text-white hover:scale-105 duration-300 border border-white"
                type="submit"
            >
                send otp
            </button>
        </form>
    </div>
}
export default SendOTPForm
