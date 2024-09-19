import { useState } from "react"

function CheckOTPForm() {

    const [code, setCode] = useState("")

    return <div class="bg-gradient-to-t from-color2/50 to-color1/50 w-full max-w-lg h-96 p-4 rounded-2xl shadow-lg shadow-color3">
        <form class="flex flex-col gap-6 items-center justify-center h-full text-lg font-semibold text-white">
            <label class="shadow-xl p-1"
            >Enter OTP code
            </label>
            <input
                class="outline-none rounded-xl p-2 text-color3 focus:outline focus:outline-color2 outline-offset-0 focus:shadow-xl"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button class="bg-color1/10 w-1/3 mx-auto p-1 rounded-xl border border-white hover:scale-105 duration-300 hover:shadow-lg">
                submit
            </button>
        </form>
    </div>
}
export default CheckOTPForm
