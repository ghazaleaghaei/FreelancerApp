import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../Services.jsx/ProjectService";

export default function useCreateProject() {
    const queryClient = useQueryClient();

    const { mutate: createProject, isPending: isCreating } = useMutation({
        mutationFn: createProjectApi,
        onSuccess: (data) => {
            console.log(data.message);

            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { createProject, isCreating }
}
