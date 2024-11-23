import { useForm } from "react-hook-form";
import useChangeUserStatus from "./useChangeUserStatus";
import FormSelect from "../../../Shared/FormSelect";

function ChangeUserStatus({ userId, onClose }) {

    const { register, handleSubmit } = useForm()
    const status = [
        {
            label: "rejected",
            value: 0
        },
        {
            label: "awaiting",
            value: 1
        },
        {
            label: "confirmed",
            value: 2
        }
    ]

    const { isUpdating, changeUserStatus } = useChangeUserStatus()

    const onSubmit = (data) => {
        changeUserStatus({ userId, data },
            {
                onSuccess: () => {
                    onClose();
                }
            }
        )
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <FormSelect
            label="change status"
            required
            name="status"
            register={register}
            options={status}
        />
        <button
            class="bg-color2 text-white p-2 rounded-full w-full disabled:opacity-50 duration-300 disabled:opacity-50"
            type="submit"
            disabled={isUpdating}
        >
            submit
        </button>
    </form>
}
export default ChangeUserStatus
