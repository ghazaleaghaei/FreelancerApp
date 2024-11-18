import Table from "../../../Shared/Table"
import ProposalRow from "./ProposalRow"
import useProposals from "./useProposals"

function ProposalsTable() {
    const { isLoading, proposals } = useProposals()

    if (isLoading) return <p>loading....</p>
    if (!proposals.length) return <p> not found proposals</p>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>description</th>
                <th>deadline</th>
                <th>budget</th>
                <th>status</th>
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
    )
}
export default ProposalsTable
