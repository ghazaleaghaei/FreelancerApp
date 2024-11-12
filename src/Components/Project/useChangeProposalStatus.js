import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../Services.jsx/ProposalService";
import { useParams } from "react-router-dom";

export default function useChangeProposalStatus() {
    const { id } = useParams()

    const queryClient = useQueryClient();

    const { mutate: changeProposalStatus, isPending: isUpdating } = useMutation({
        mutationFn: changeProposalStatusApi,
        onSuccess: (data) => {
            console.log(data.message);

            queryClient.invalidateQueries({
                queryKey: ["project", id],
            })
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { changeProposalStatus, isUpdating }
}
