import { useForm } from "react-hook-form";
import FormSelect from "../Projects/FormSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function ChangeProposalStatus({ proposalId, onClose }) {

    const { register, handleSubmit } = useForm()
    const status = [
        {
            label: "rejected",
            value: 0
        },
        {
            label: "awaiting",
            value: 1
        },
        {
            label: "confirmed",
            value: 2
        }
    ]
    const queryClient = useQueryClient();
    const { id: projectId } = useParams();
    const { isUpdating, changeProposalStatus } = useChangeProposalStatus()

    const onSubmit = (data) => {
        changeProposalStatus({ proposalId, projectId, ...data },
            {
                onSuccess: () => {
                    onClose();
                    queryClient.invalidateQueries({
                        queryKey: ["project", projectId],
                    })
                }
            }
        )
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <FormSelect
            label="change status"
            required
            name="status"
            register={register}
            options={status}
        />
        <button
            class="bg-color2 text-white p-2 rounded-full w-full disabled:opacity-50 duration-300 disabled:opacity-50"
            type="submit"
            disabled={isUpdating}
        >
            submit
        </button>
    </form>
}
export default ChangeProposalStatus
