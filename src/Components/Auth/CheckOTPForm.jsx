import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { checkOtp } from "../../Services.jsx/AuthService"
import { useNavigate } from "react-router-dom"

function CheckOTPForm({ phoneNumber, onBack, onResendOtp }) {
    const [time, setTime] = useState(10)

    const navigate = useNavigate()

    const [code, setCode] = useState("")

    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: checkOtp
    })

    const checkOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateAsync({
                phoneNumber: phoneNumber,
                otp: code,
            })
            console.log(data.message)
            if (data.user.isActive) {
                //do something
            } else {
                navigate("/complete-profile")
            }
        } catch (error) {
            console.log(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000)
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time])

    return <div class="w-full h-full flex flex-col items-center justify-center">
        <button
            onClick={onBack}
        >
            go back
        </button>
        <div>
            {
                time > 0
                    ? <p>{time}to resend code </p>
                    : <button onClick={onResendOtp}>resend code</button>
            }
        </div>
        <div class="bg-gradient-to-t from-color2/50 to-color1/50 w-full max-w-lg h-96 p-4 rounded-2xl shadow-lg shadow-color3">
            <form
                class="flex flex-col gap-6 items-center justify-center h-full text-lg font-semibold text-white"
                onSubmit={checkOtpHandler}
            >
                <label class="shadow-xl p-1"
                >Enter OTP code
                </label>
                <input
                    class="outline-none rounded-xl p-2 text-color3 focus:outline focus:outline-color2 outline-offset-0 focus:shadow-xl"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button
                    class="bg-color1/10 w-1/3 mx-auto p-1 rounded-xl border border-white hover:scale-105 duration-300 hover:shadow-lg"
                    type="submit"
                >
                    submit
                </button>
            </form>
        </div>
    </div>
}
export default CheckOTPForm
