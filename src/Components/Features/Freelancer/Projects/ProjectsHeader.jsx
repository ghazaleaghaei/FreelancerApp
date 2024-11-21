import useCategories from "../../../Hooks/useCategories"
import Filter from "./Filter"
import FilterDropDown from "./FilterDropDown"

const sortOptions = [
    {
        label: "sorted(latest)",
        value: "latest"
    },
    {
        label: "sorted(earliest)",
        value: "earliest"
    }
]
const statusOptions = [
    {
        label: "all",
        value: "ALL"
    },
    {
        label: "open",
        value: "OPEN"
    },
    {
        label: "close",
        value: "CLOSED"
    }
]
function ProjectsHeader() {
    const { isLoading, transformedCategories } = useCategories()
    return (
        <section class="flex w-full justify-between p-4">
            <h1>projects list</h1>
            <section class="flex gap-2">
                <Filter
                    options={statusOptions}
                    filterField="status"
                />
                <FilterDropDown
                    options={sortOptions}
                    filterField="sort"
                />
                <FilterDropDown
                    options={
                        [
                            {
                                value: "ALL",
                                label: "categories(all)"
                            },
                            ...transformedCategories
                        ]
                    }
                    filterField="category"
                />
            </section>
        </section>
    )
}
export default ProjectsHeader
