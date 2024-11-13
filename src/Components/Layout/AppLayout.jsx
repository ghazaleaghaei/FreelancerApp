import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

function AppLayout() {
    return <section class="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-screen">
        <Header />
        <Sidebar />
        <div class="bg-color1/10 overflow-y-auto p-4 dark:bg-slate-900 dark:text-blue-100">
            <Outlet />
        </div>
    </section>
}
export default AppLayout
