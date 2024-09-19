import { Route, Routes } from "react-router-dom"
import Auth from "./Components/Auth/Auth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </QueryClientProvider>
    )
}

export default App
