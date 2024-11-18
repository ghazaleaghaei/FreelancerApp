import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../../../Services/ProposalService";

export default function useChangeProposalStatus() {

    const { mutate: changeProposalStatus, isPending: isUpdating } = useMutation({
        mutationFn: changeProposalStatusApi,
        onSuccess: (data) => {
            console.log(data.message);
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { changeProposalStatus, isUpdating }
}
