import { useSearchParams } from "react-router-dom"

function FilterDropDown({ options, filterField }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const value = searchParams.get(filterField) || ""

    const handleChange = (e) => {
        searchParams.set(filterField, e.target.value)
        setSearchParams(searchParams)
    }

    return (
        <select
            value={value}
            onChange={handleChange}
            class="rounded-xl p-2 outline-none focus:shadow-lg duration-300 bg-color2/10"
        >
            {
                options.map((item) => (
                    <option
                        key={item.value}
                        value={item.value}
                        class="text-color2 bg-purple-100"
                    >
                        {item.label}
                    </option>
                ))
            }
        </select>
    )
}
export default FilterDropDown
