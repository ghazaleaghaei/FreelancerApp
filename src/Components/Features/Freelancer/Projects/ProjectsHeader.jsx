import useCategories from "../../../Hooks/useCategories"
import FilterDropDown from "./FilterDropDown"

function ProjectsHeader() {
    const { isLoading, transformedCategories } = useCategories()
    return (
        <div class="flex w-full justify-between p-4">
            <h1>projects list</h1>
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
        </div>
    )
}
export default ProjectsHeader
