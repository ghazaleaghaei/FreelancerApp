import { useForm } from "react-hook-form"
import TextField from "../../../Shared/TextField"
import FormSelect from "./FormSelect"
import { useState } from "react"
import TagsInput from "./TagsInput"
import DatePickerField from "./DatePickerField"
import useCategories from "../../../Hooks/useCategories"
import useCreateProject from "./useCreateProject"
import useEditProject from "./useEditProject"

function CreateProjectForm({ onClose, projectToEdit = {} }) {

    const { _id: editId } = projectToEdit;

    const isEditingProject = Boolean(editId);

    const { title, description, budget, category, deadline, tags: editTags } = projectToEdit;

    let editValues = {};
    if (isEditingProject) {
        editValues = {
            title,
            description,
            budget,
            category: category._id,
        }
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ defaultValues: editValues })

    const [tags, setTags] = useState(editTags || [])
    const [date, setDate] = useState(new Date(deadline || ""))

    const { categories } = useCategories()
    const { createProject, isCreating } = useCreateProject()
    const { editProject, isEditing } = useEditProject()

    const onSubmit = (data) => {
        const newProject = {
            ...data,
            deadline: new Date(date).toISOString(),
            tags,
        };
        console.log(newProject)
        if (isEditingProject) {
            editProject({ id: editId, newProject }, {
                onSuccess: () => {
                    onClose();
                    reset();
                }
            })

        } else {
            createProject(newProject, {
                onSuccess: () => {
                    onClose();
                    reset();
                }
            })
        }
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
                type="number"
                register={register}
                required
                validationSchema={{
                    required: "required",
                    minLength: {
                        value: 5,
                        message: "the length of the title must be greater than 5 characters"
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
                class="bg-color2 text-white p-2 rounded-full w-full disabled:opacity-50 duration-300"
                type="submit"
                disabled={isCreating}
            >
                submit
            </button>
        </form>
    )
}
export default CreateProjectForm
