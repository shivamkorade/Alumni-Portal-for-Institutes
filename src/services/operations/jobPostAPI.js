const { apiConnector } = require("../apiConnector");
const { jobEndPoints } = require("../apis");
import toast from "react-hot-toast";

const {
    CREATE_JOB_POST_API,
    EDIT_JOB_POST_API,
    GET_ALL_JOB_POSTS_API,
    DELETE_JOB_POST_API,
    DELETE_EXPIRED_JOB_POSTS_API

} = jobEndPoints;

// Function to get all job posts
export const getAllJobPosts = async () => {
    const toastId = toast.loading("Loading...");
    let result = [];

    try {
        const response = await apiConnector("GET", GET_ALL_JOB_POSTS_API);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        result = response.data.data;
    } catch (error) {
        console.error("Get all job posts API error.", error);
        toast.error(error.response?.data?.message || "Error fetching job posts.");
    }

    toast.dismiss(toastId);
    return result;
};

// Function to create a job post
export const createJobPost = async (jobData, token) => {
    const toastId = toast.loading("Creating job post...");
    let result = null;

    try {
        const response = await apiConnector("POST", CREATE_JOB_POST_API, jobData, {
            Authorization: `Bearer ${token}`,
        });

        console.log("Create job post API response:", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        toast.success("Job post created successfully.");
        result = response.data.data;
    } catch (error) {
        console.error("Error creating job post:", error);
        toast.error(error.response?.data?.message || "Error creating job post.");
    }

    toast.dismiss(toastId);
    return result;
};

// Function to edit a job post
export const editJobPost = async (jobData, token) => {
    const toastId = toast.loading("Updating job post...");
    let result = null;

    try {
        const response = await apiConnector("PUT", EDIT_JOB_POST_API, jobData, {
            Authorization: `Bearer ${token}`,
        });

        console.log("Edit job post API response:", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        toast.success("Job post updated successfully.");
        result = response.data.data;
    } catch (error) {
        console.error("Error editing job post:", error);
        toast.error(error.response?.data?.message || "Error updating job post.");
    }

    toast.dismiss(toastId);
    return result;
};

// Function to delete a job post
export const deleteJobPost = async (jobPostId, token) => {
    const toastId = toast.loading("Deleting job post...");

    try {
        const response = await apiConnector("DELETE", DELETE_JOB_POST_API(jobPostId), null, {
            Authorization: `Bearer ${token}`,
        });

        console.log("Delete job post API response:", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        toast.success("Job post deleted successfully.");
    } catch (error) {
        console.error("Error deleting job post:", error);
        toast.error(error.response?.data?.message || "Error deleting job post.");
    }

    toast.dismiss(toastId);
};

// Function to delete expired job posts
export const deleteExpiredJobPosts = async (token) => {
    const toastId = toast.loading("Deleting expired job posts...");

    try {
        const response = await apiConnector("DELETE", DELETE_EXPIRED_JOB_POSTS_API, null, {
            Authorization: `Bearer ${token}`,
        });

        console.log("Delete expired job posts API response:", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        toast.success("Expired job posts deleted successfully.");
    } catch (error) {
        console.error("Error deleting expired job posts:", error);
        toast.error(error.response?.data?.message || "Error deleting expired job posts.");
    }

    toast.dismiss(toastId);
};