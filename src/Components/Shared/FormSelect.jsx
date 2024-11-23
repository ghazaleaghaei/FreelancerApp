function FormSelect({ label, name, register, options, required }) {
    return (
        <div class="flex flex-col gap-2 my-4">
            <label htmlFor={name}>
                {label}{required && <span class="text-red-700">*</span>}
            </label>
            <select {...register(name)} id={name} class="rounded-xl p-2 outline-none focus:shadow-lg duration-300 bg-color2/10">
                {
                    options.map((option) => <option key={option.value} value={option.value}>
                        {option.label}
                    </option>)
                }
            </select>
        </div>
    )
}
export default FormSelect
