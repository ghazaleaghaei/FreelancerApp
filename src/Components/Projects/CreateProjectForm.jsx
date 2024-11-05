import { useForm } from "react-hook-form"
import TextField from "../Shared/TextField"

function CreateProjectForm() {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="title"
                name="title"
                register={register}
                required
                validationSchema={{
                    required: "required",
                    minLength: {
                        value: 5,
                        message: "the length of the title must be greater than 10 characters"
                    }
                }}
                errors={errors}
            />
            <TextField
                label="description"
                name="description"
                register={register}
                required
                validationSchema={{
                    required: "required",
                    minLength: {
                        value: 10,
                        message: "the length of the title must be greater than 10 characters"
                    }
                }}
                errors={errors}
            />
            <TextField
                label="budget"
                name="budget"
                register={register}
                required
                validationSchema={{
                    required: "required",
                    minLength: {
                        value: 5,
                        message: "the length of the title must be greater than 10 characters"
                    }
                }}
                errors={errors}
            />
            <button
                class="bg-color2 text-white p-2 rounded-full w-full"
                type="submit"
            >
                submit
            </button>
        </form>
    )
}
export default CreateProjectForm
