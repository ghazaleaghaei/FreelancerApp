import { useEffect } from "react";
import useAuthorized from "../Hooks/useAuthorized";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isAuthorized, isLoading } = useAuthorized()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/auth");
        if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true })
    }, [isAuthenticated, isAuthorized, isLoading])
    if (isLoading) return (
        <div>loading....</div>
    )
    if (isAuthenticated && isAuthorized) return children;
}
export default ProtectedRoute
