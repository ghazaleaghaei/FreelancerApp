import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi, editProjectApi } from "../../Services.jsx/ProjectService";

export default function useEditProject() {
    const queryClient = useQueryClient();

    const { mutate: editProject, isPending: isEditing } = useMutation({
        mutationFn: editProjectApi,
        onSuccess: (data) => {
            console.log(data.message);

            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { editProject, isEditing }
}
