import { useState } from "react";
import Table from "../Shared/Table";
import Modal from "../Shared/Modal"
import ChangeProposalStatus from "./ChangeProposalStatus";

function ProposalRow({ proposal, index }) {
    const [open, setOpen] = useState(false)
    const status = [
        {
            label: "rejected",
            class: "bg-red-700"
        },
        {
            label: "awaiting",
            class: "bg-color2/50"
        },
        {
            label: "confirmed",
            class: "bg-green-600"
        }
    ]
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td><p>{proposal.description}</p></td>
            <td>{proposal.duration} day </td>
            <td>{proposal.price}</td>
            <td>
                <span class={`rounded-full px-3 py-1 text-white ${status[proposal.status].class}`}>
                    {status[proposal.status].label}
                </span>
            </td>
            <td>
                <button onClick={() => setOpen(true)}>
                    change status
                </button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="change request status"
                >
                    <ChangeProposalStatus
                        onClose={() => setOpen(false)}
                        proposalId={proposal._id}
                    />
                </Modal>
            </td>
        </Table.Row>
    )
}
export default ProposalRow
