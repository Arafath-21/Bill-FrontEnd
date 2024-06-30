import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

function AppLayout() {
    return (
     <div className="grid grid-cols-[10rem,1fr] md:grid-cols-[12rem,1fr] lg:grid-cols-[18rem,1fr] grid-rows-[auto,1fr] min-h-screen  max-w-full">
        <Sidebar/>
        <Header/>
        <main className="bg-slate-300 overflow-y-scroll relative">
            <Outlet/>
        </main>
     </div>
    )
}

export default AppLayout
