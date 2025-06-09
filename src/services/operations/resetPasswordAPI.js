import { authEndPoints } from "../apis";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";

const { RESET_PASSWORD_TOKEN_API, RESET_PASSWORD_API } = authEndPoints;


export const requestPasswordReset = async (formData) => {
    const toastId = toast.loading("Sending reset link...");

    try {
        const response = await apiConnector("POST", RESET_PASSWORD_TOKEN_API, formData);

        if(!response?.data?.success) {
            throw new Error(response?.data?.message);
        }

        toast.success("Password reset link sent to your email!");
        return response.data;
        
    } catch (error) {
        console.error("RESET PASSWORD TOKEN API error.", error);
        toast.error(error.response?.data?.message || "Failed to send reset link");
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}

export const resetPassword = async (formData, navigate) => {
    const toastId = toast.loading("Updating password...");

    try {
        const response = await apiConnector("POST", RESET_PASSWORD_API, formData);

        if(!response?.data?.success) {
            throw new Error(response?.data?.message);
        }

        toast.success("Password updated successfully!");
        
        // Redirect to login page after successful password reset
        navigate("/login");
        
    } catch (error) {
        console.error("RESET PASSWORD API error.", error);
        toast.error(error.response?.data?.message || "Password reset failed");
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
}