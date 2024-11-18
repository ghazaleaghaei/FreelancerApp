import Table from "../../../Shared/Table";

function ProposalRow({ proposal, index }) {
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
            <td>{proposal.description}</td>
            <td>{proposal.duration} day</td>
            <td>{proposal.price} $</td>
            <td>
                <span class={`rounded-full px-3 py-1 text-white ${status[proposal.status].class}`}>
                    {status[proposal.status].label}
                </span>
            </td>
        </Table.Row>
    )
}
export default ProposalRow
