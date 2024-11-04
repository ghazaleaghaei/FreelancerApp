import useOutsideClick from "../Hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
    const ref = useOutsideClick(onClose);
    return (
        open && (
            <div class="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-color2/20 z-40">
                <div
                    ref={ref}
                    class="fixed top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 shadow-lg transition-all duration-300 bg-white w-[calc(100vw-2rem)] max-w-xl max-h-[calc(100vh-2rem)] overflow-y-auto"
                >
                    <div class="flex border-b border-b-color2 justify-between pb-2">
                        <strong>{title}</strong>
                        <button onClick={onClose}>
                            <span class="text-red-700">&#x274C;</span>
                        </button>
                    </div>
                    <div class="text-start py-2">{children}</div>
                </div>
            </div>
        )
    );
}
export default Modal
