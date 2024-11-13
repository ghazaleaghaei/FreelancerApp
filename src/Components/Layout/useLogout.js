import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../Services.jsx/AuthService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {

    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const { isPending, mutate: logout } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/auth", { replace: true });
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { logout, isPending }
}
