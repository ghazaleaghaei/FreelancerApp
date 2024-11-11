import Table from "../Shared/Table";

function ProposalRow({ proposal, index }) {
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td><p>{proposal.description}</p></td>
            <td>{proposal.duration} day </td>
            <td>{proposal.price}</td>
            <td>{proposal.status}</td>
            <td>++</td>
        </Table.Row>
    )
}
export default ProposalRow
