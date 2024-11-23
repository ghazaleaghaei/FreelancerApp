import { useEffect, useState } from "react"
import CheckOTPForm from "./CheckOTPForm"
import SendOTPForm from "./SendOTPForm"
import { useMutation } from "@tanstack/react-query"
import { getOtp } from "../../Services/AuthService"
import useUser from "./useUser"
import { useNavigate } from "react-router-dom"

function Auth() {
    const { user } = useUser()
    const navigate = useNavigate()
    const [phoneNumber, setPhoneNumber] = useState("")
    const [step, setStep] = useState(1)
    const { isPending: isSendingOtp, error, data: otpResponse, mutateAsync } = useMutation({
        mutationFn: getOtp,
    })
    useEffect(() => {
        if (user) navigate(`/${user.role.toLowerCase()}`)
    }, [user])

    const sendOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateAsync({ phoneNumber })
            setStep(2)
            console.log(data.message)
        } catch (error) {
            setStep(2)
            console.log(error?.response?.data?.message)
        }
    }
    const renderStep = () => {
        switch (step) {
            case 1:
                return <SendOTPForm
                    setStep={setStep}
                    phoneNumber={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onSubmit={sendOtpHandler}
                    isSendingOtp={isSendingOtp}
                />
            case 2:
                return <CheckOTPForm
                    phoneNumber={phoneNumber}
                    onBack={() => setStep((s) => s - 1)}
                    onResendOtp={sendOtpHandler}
                    otpResponse={otpResponse}
                />
            default:
                return null;
        }
    }
    return <div class="h-screen w-full flex items-center justify-center">
        {renderStep()}
    </div>
}
export default Auth
