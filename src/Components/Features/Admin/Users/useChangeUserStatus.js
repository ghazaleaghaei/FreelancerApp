import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../../Services/AuthService";

export default function useChangeUserStatus() {
    const queryClient = useQueryClient();
    const { mutate: changeUserStatus, isPending: isUpdating } = useMutation({
        mutationFn: changeUserStatusApi,
        onSuccess: (data) => {
            console.log(data.message);
            queryClient.invalidateQueries({
                queryKey: ["users"],
            })
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { changeUserStatus, isUpdating }
}
