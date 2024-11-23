import Table from "../../../Shared/Table"
import useUsers from "../useUsers"
import UserRow from "./UserRow"

function UsersTable() {
    const { isLoading, users } = useUsers()

    if (isLoading) return <p>loading....</p>
    if (!users.length) return <p> not found users</p>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>name</th>
                <th>email</th>
                <th>phoneNumber</th>
                <th>role</th>
                <th>status</th>
                <th>operation</th>
            </Table.Header>
            <Table.Body>
                {
                    users.map((user, index) => (
                        <UserRow
                            user={user}
                            index={index}
                            key={user._id}
                        />
                    ))
                }
            </Table.Body>
        </Table>
    )
}
export default UsersTable
