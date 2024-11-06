import { useForm } from "react-hook-form"
import TextField from "../Shared/TextField"
import FormSelect from "./FormSelect"
import { useState } from "react"
import TagsInput from "./TagsInput"
import DatePickerField from "./DatePickerField"
import useCategories from "../Hooks/useCategories"

function CreateProjectForm() {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const [tags, setTags] = useState([])
    const [date, setDate] = useState(new Date())

    const { categories } = useCategories()

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
            <FormSelect
                label="category"
                required
                name="category"
                register={register}
                options={categories}
            />
            <TagsInput
                label="tags"
                name="tags"
                tags={tags}
                setTags={setTags}
            />
            <DatePickerField
                date={date}
                setDate={setDate}
                label="deadline"
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
