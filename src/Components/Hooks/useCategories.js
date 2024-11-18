import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../../Services/CategoryService";

export default function useCategories() {
    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategoryApi
    })
    const { categories: items = [] } = data || {}
    const categories = items.map((category) => ({
        label: category.title,
        value: category._id
    }))
    const transformedCategories = items.map((item) => ({
        label: item.title,
        value: item.englishTitle,
    }))
    return { isLoading, categories, transformedCategories }
}
