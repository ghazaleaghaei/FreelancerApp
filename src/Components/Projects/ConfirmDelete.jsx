function ConfirmDelete({ resourceName, onClose, onConfirm, disable }) {
    return (
        <div class="flex flex-col gap-4 mt-4">
            <h2>
                are you sure to delete {resourceName}?
            </h2>
            <div class="flex justify-between">
                <button class="bg-color2 rounded-xl py-1 px-3 text-white shadow-md"
                    disabled={disable}
                    onClick={onClose}
                >
                    cancel
                </button>
                <button
                    disabled={disable}
                    onClick={onConfirm}
                    class="border border-color1 text-color1 py-1 px-3 rounded-xl"
                >
                    submit
                </button>
            </div>
        </div>
    )
}
export default ConfirmDelete
