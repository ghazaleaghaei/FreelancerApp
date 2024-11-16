
function Sidebar({ children }) {
    return <div class="bg-color2/10 row-start-1 row-span-2 p-4 dark:bg-cyan-950 dark:text-blue-100">
        <ul class="flex flex-col gap-2">
            {children}
        </ul>
    </div>
}
export default Sidebar
