import { authEndPoints } from "../apis";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";

const { LOGIN_API, SIGNUP_API, SENDOTP_API } = authEndPoints;

// SendOTP function
export const sendOTP = async (personalEmail, navigate) => {
  const toastId = toast.loading("Loading...");

  try {
    const response = await apiConnector("POST", SENDOTP_API, {email});

    console.log("Send OTP API response.", response);

    if(!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("OTP sent successfully.");
    // navigate("/verify-email");
  } catch (error) {
    console.log("Send OTP API error.", error);
    toast.error(error.response.data.message);
  }

  toast.dismiss(toastId);
}

// SignUp function
export const signUp = async (data, navigate) => {
  const toastId = toast.loading("Loading...");
  
  try {
    // Create FormData object
    const formData = new FormData();
    
    // Append all text fields
    Object.keys(data).forEach(key => {
      if (key !== 'profilePicture') {
        formData.append(key, data[key]);
      }
    });
    
    // Append the file if it exists
    if (data.profilePicture) {
      formData.append('profilePicture', data.profilePicture);
    }

    const response = await apiConnector("POST", SIGNUP_API, formData, {
      headers: { 
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    toast.success("SignUp successful!");
    navigate("/login");
  } catch (error) {
    console.error("SIGNUP API error:", error);
    toast.error(error?.response?.data?.message || "SignUp failed");
  } finally {
    toast.dismiss(toastId);
  }
};

// Login function
export const logIn = async (formData, navigate) => {
    const toastId = toast.loading("Loading...");

    try {
        const response = await apiConnector("POST", LOGIN_API, formData);

        console.log("Login API response....", response.data.data);

        if(!response?.data?.success) {
            throw new Error(response?.data?.message);
        }

        toast.success("Login successful");

        // Add token to the localStorage
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
        // localStorage.setItem("user", JSON.stringify(response?.data?.data));
        
    } catch (error) {
        console.error("LOGIN API error.", error);
        toast.error(error.response?.data?.message || "Login failed.");

    } finally {
      toast.dismiss(toastId);
    }
}
