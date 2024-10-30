import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./Components/Auth/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CompleteProfile from "./Components/Profile/CompleteProfile"
import NotFound from "./Components/Pages/NotFound"
import Home from "./Components/Pages/Home"
import AppLayout from "./Components/Shared/AppLayout"
import OwnerDashboard from "./Components/Pages/OwnerDashbord"
import Projects from "./Components/Projects/Projects"
import Project from "./Components/Pages/Project"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/complete-profile" element={<CompleteProfile />} />
                <Route path="/owner" element={<AppLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<OwnerDashboard />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="projects/:id" element={<Project />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </QueryClientProvider>
    )
}

export default App
