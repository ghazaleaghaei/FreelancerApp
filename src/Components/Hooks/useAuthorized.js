import { useLocation } from "react-router-dom";
import useUser from "../Auth/useUser"
export default function useAuthorized() {
    const { isLoading, user } = useUser()
    const { pathname } = useLocation()

    let isAuthenticated = false;

    if (user) isAuthenticated = true

    let isAuthorized = false;

    const role = pathname.split("/").at(1);

    const roles = {
        admin: "ADMIN",
        freelancer: "FREELANCER",
        owner: "OWNER"
    }

    if (Object.keys(roles).includes(role)) {
        if (user && user.role === roles[role]) isAuthorized = true
    }

    return { isLoading, isAuthenticated, isAuthorized, user }
}
