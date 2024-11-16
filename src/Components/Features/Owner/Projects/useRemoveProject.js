import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../../../Services/ProjectService";

export default function useRemoveProject() {
    const queryClient = useQueryClient();

    const { mutate: removeProject, isPending: isDeleting } = useMutation({
        mutationFn: removeProjectApi,
        onSuccess: (data) => {
            console.log(data.message);

            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { removeProject, isDeleting }
}
