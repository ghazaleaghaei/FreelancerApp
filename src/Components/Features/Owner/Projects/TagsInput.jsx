import { useState } from "react"

function TagsInput({ label, name, tags, setTags }) {

    const [currentTag, setCurrentTag] = useState("")

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && currentTag.trim() !== "") {
            event.preventDefault();
            setTags([...tags, currentTag]);
            setCurrentTag("");
        }
    }
    const handleChange = (e) => {
        setCurrentTag(e.target.value)
    }
    const handleDelete = (tag) => {
        const newTags = tags.filter((item) => item !== tag)
        setTags(newTags)
    }

    return (
        <div class="flex flex-col gap-2 my-4">
            <label htmlFor={name}>
                {label}
            </label>
            <div class="flex flex-col gap-2 bg-color2/10 p-2">
                <ul class="flex flex-wrap gap-2 *:bg-color3/50 *:py-1 *:px-3 *:rounded-lg text-white">
                    {
                        tags?.map((tag, index) => (
                            <li key={index} onClick={() => handleDelete(tag)}>
                                {tag}
                            </li>
                        ))
                    }
                </ul>
                <input
                    id={name}
                    class="rounded-xl p-2 outline-none focus:shadow-lg duration-300 bg-color2/10"
                    type="text"
                    autoComplete="off"
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    value={currentTag}
                />
            </div>
        </div>
    )
}
export default TagsInput
