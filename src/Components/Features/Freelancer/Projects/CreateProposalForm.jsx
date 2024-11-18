import { useForm } from "react-hook-form"
import TextField from "../../../Shared/TextField"
import useCreateProposal from "./useCreateProposal"

function CreateProposalForm({ onClose, projectId }) {

    const { createProposal, isCreating } = useCreateProposal()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()


    const onSubmit = (data) => {
        const newProposal = {
            ...data,
            projectId
        };
        console.log(newProposal)

        createProposal(newProposal, {
            onSuccess: () => {
                onClose();
                reset();
            }
        })

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="description"
                name="description"
                register={register}
                required
                validationSchema={{
                    required: "description is required",
                    minLength: {
                        value: 10,
                        message: "the length of the description must be greater than 10 characters"
                    }
                }}
                errors={errors}
            />
            <TextField
                label="price"
                name="price"
                register={register}
                type="number"
                required
                validationSchema={{
                    required: "price is required"
                }}
                errors={errors}
            />
            <TextField
                label="duration"
                name="duration"
                register={register}
                required
                type="number"
                validationSchema={{
                    required: "duration is required"
                }}
                errors={errors}
            />
            <button
                class="bg-color2 text-white p-2 rounded-full w-full disabled:opacity-50 duration-300"
                type="submit"
                disabled={isCreating}
            >
                submit
            </button>
        </form>
    )
}
export default CreateProposalForm
