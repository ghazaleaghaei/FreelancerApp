import useMoveBack from "../Hooks/useMoveBack"

function NotFound() {
    const moveBack = useMoveBack()
    return (
        <div class="bg-color2/20 rounded-xl p-4 max-w-5xl mx-auto my-20 flex flex-col gap-8 text-center text-color3">
            <h1>
                not found page
            </h1>
            <button
                onClick={moveBack}
                class="bg-color2/20 w-fit py-1 px-4 rounded-xl mx-auto"
            >
                go back
            </button>
        </div>
    )
}
export default NotFound
