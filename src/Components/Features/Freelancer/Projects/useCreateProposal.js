import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../../../../Services/ProposalService";

export default function useCreateProposal() {
    const queryClient = useQueryClient();

    const { mutate: createProposal, isPending: isCreating } = useMutation({
        mutationFn: createProposalApi,
        onSuccess: (data) => {
            console.log(data.message);

            queryClient.invalidateQueries({
                queryKey: ["proposals"]
            })
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { createProposal, isCreating }
}
