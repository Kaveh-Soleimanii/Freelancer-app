import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize"
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const { isLoading, isAuthenticated, isAuthorized , isVerified } = useAuthorize();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/auth");
        if (!isVerified && !isLoading){
            toast.error("پروفایل شما هنوز تایید نشود است")
            navigate("/")
        }
        if (!isAuthorized && !isLoading) navigate("/not-access" , {replace:true});
    }, [isAuthenticated, isAuthorized, navigate, isLoading , isVerified]);


    if (isLoading) return <div
        className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
    </div>

    if(isAuthenticated && isAuthorized) return children;

}

export default ProtectedRoute 