import { useEffect } from "react";
import useAuthorized from "../Hooks/useAuthorized";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isAuthorized, isLoading, isVerified } = useAuthorized()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/auth");
        if (!isVerified && !isLoading) navigate("/not-access")
        if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true })
    }, [isAuthenticated, isAuthorized, isLoading, isVerified])
    if (isLoading) return (
        <div>loading....</div>
    )
    if (isAuthenticated && isAuthorized) return children;
}
export default ProtectedRoute
