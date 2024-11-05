function TextField({ name, label, register, type = "text", required, validationSchema, errors }) {
    return (
        <div class="flex flex-col gap-2 my-4">
            <label class="" htmlFor={name}>
                {label}{required && <span class="text-red-700">*</span>}
            </label>
            <input
                id={name}
                class="rounded-xl p-2 outline-none focus:shadow-lg duration-300 bg-color2/10"
                type={type}
                autoComplete="off"
                {...register(name, validationSchema)}
            />
            {
                <span class="text-red-700 block text-sm h-4">
                    {errors[name]?.message}
                </span>
            }
        </div>
    )
}
export default TextField
