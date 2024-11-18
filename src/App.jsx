import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./Components/Auth/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CompleteProfile from "./Components/Profile/CompleteProfile"
import NotFound from "./Components/Pages/NotFound"
import Home from "./Components/Pages/Home"
import OwnerDashboard from "./Components/Features/Owner/OwnerDashboard"
import { DarkModeProvider } from "./Components/Context/DarkModeContext"
import OwnerLayout from "./Components/Features/Owner/OwnerLayout"
import Projects from "./Components/Features/Owner/Projects/Projects"
import Project from "./Components/Features/Owner/Project/Project"
import FreelancerLayout from "./Components/Features/Freelancer/FreelancerLayout"
import FreelancerDashboard from "./Components/Features/Freelancer/FreelancerDashboard"
import Proposals from "./Components/Features/Freelancer/Proposals/Proposals"
import SubmittedProjects from "./Components/Features/Freelancer/Projects/SubmittedProjects"

const queryClient = new QueryClient()

function App() {
    return (
        <DarkModeProvider>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/complete-profile" element={<CompleteProfile />} />
                    <Route path="/owner" element={<OwnerLayout />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<OwnerDashboard />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="projects/:id" element={<Project />} />
                    </Route>
                    <Route path="/freelancer" element={<FreelancerLayout />}>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<FreelancerDashboard />} />
                        <Route path="proposals" element={<Proposals />} />
                        <Route path="projects" element={<SubmittedProjects />} />
                    </Route>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </QueryClientProvider>
        </DarkModeProvider>
    )
}

export default App
