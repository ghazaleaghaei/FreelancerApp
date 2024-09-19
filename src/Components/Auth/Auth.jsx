import CheckOTPForm from "./CheckOTPForm"
import SendOTPForm from "./SendOTPForm"

function Auth() {
    return <div class="h-screen w-full flex items-center justify-center">
        <SendOTPForm />
        {/* <CheckOTPForm /> */}
    </div>
}
export default Auth
