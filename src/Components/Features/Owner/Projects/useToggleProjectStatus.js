import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../../../Services/ProjectService";

export default function useToggleProjectStatus() {
    const queryClient = useQueryClient();

    const { mutate: toggleProjectStatus, isPending: isUpdating } = useMutation({
        mutationFn: toggleProjectStatusApi,
        onSuccess: (data) => {
            console.log(data.message);

            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { toggleProjectStatus, isUpdating }
}
