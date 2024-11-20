import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value

    const handleChange = (value) => {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }
    return (
        <section class="flex gap-4 items-center">
            <h1>status</h1>
            <div class="flex gap-2 items-center">
                {
                    options.map((option) => {
                        const isActive = currentFilter === option.value;
                        return (
                            <button
                                key={option.value}
                                class={`rounded-full py-1 px-4 ${isActive ? "bg-green-500 dark:bg-green-700" : "bg-color3/10 dark:bg-color2/50"}`}
                                onClick={() => handleChange(option.value)}
                                disabled={isActive}
                            >
                                {option.label}
                            </button>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Filter
