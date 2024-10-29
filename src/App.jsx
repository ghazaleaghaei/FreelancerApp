import { Route, Routes } from "react-router-dom"
import Auth from "./Components/Auth/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CompleteProfile from "./Components/Profile/CompleteProfile"
import NotFound from "./Components/Pages/NotFound"
import Home from "./Components/Pages/Home"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/complete-profile" element={<CompleteProfile />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </QueryClientProvider>
    )
}

export default App
