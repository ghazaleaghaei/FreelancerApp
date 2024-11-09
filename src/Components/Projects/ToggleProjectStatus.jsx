function ToggleProjectStatus() {
    return <div>
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-color2/50 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-0.5 after:bg-white after:border after:rounded-full after:w-5 after:aspect-square after:transition-all">
            </div>
            <span class="px-2 py-1">
                open
            </span>

        </label>

    </div>
}
export default ToggleProjectStatus
