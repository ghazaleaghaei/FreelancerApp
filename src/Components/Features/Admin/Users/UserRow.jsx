import { useState } from "react";
import Modal from "../../../Shared/Modal";
import Table from "../../../Shared/Table";
import ChangeUserStatus from "./ChangeUserStatus";

function UserRow({ user, index }) {
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
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.role}</td>
            <td>
                <span class={`rounded-full px-3 py-1 text-white ${status[user.status].class}`}>
                    {status[user.status].label}
                </span>
            </td>
            <td>
                <button onClick={() => setOpen(true)}>change status</button>
                <Modal
                    title="change user status"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <ChangeUserStatus
                        onClose={() => setOpen(false)}
                        userId={user._id}
                    />
                </Modal>
            </td>
        </Table.Row>
    )
}
export default UserRow
