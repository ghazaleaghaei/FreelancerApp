import Table from "../Shared/Table"
import ProposalRow from "./ProposalRow"

function ProposalsTable({ proposals }) {
    if (!proposals.length) return <div>not found requests</div>
    return <Table>
        <Table.Header>
            <th>#</th>
            <th>freelancer</th>
            <th>description</th>
            <th>deadline</th>
            <th>budget</th>
            <th>status</th>
            <th>operation</th>
        </Table.Header>
        <Table.Body>
            {
                proposals.map((proposal, index) => (
                    <ProposalRow
                        proposal={proposal}
                        index={index}
                        key={proposal._id}
                    />
                ))
            }
        </Table.Body>
    </Table>
}
export default ProposalsTable
