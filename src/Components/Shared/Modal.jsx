function Modal({ open, onClose, title, children }) {
    return (
        open && (
            <div class="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-color2/50 z-40">
                <div class="fixed top-1/2 start-1/2 translate-x-1/2 translate-y-1/2 rounded-lg p-4 shadow-lg transition-all duration-300 ">

                </div>
            </div>
        )
    )
}
export default Modal
