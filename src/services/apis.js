export const BASE_URL = import.meta.env.VITE_BASE_URL

export const authEndPoints = {
    SIGNUP_API : "http://localhost:4000/api/v1/auth/sign-in",
    LOGIN_API : "http://localhost:4000/api/v1/auth/login",
    SENDOTP_API: "http://localhost:4000/api/v1/auth/sendOTP",
    RESET_PASSWORD_TOKEN_API: "http://localhost:4000/api/v1/auth/reset-password-token",
    RESET_PASSWORD_API: "http://localhost:4000/api/v1/auth/reset-password",
}

export const eventEndPoints = {
    CREATE_EVENT_API: BASE_URL + "/event/add",
    EDIT_EVENT_API: BASE_URL + "/event/edit",
    GET_ALL_EVENTS_API: BASE_URL + "/event/events",
    CANCEL_EVENT_API: (eventId) => BASE_URL + `/event/cancel/${eventId}`,
}

export const jobEndPoints = {
    CREATE_JOB_API_POST: BASE_URL + "/job/create",
    EDIT_JOB_POST_API: BASE_URL + "/job/edit",
    GET_ALL_JOB_POSTS_API: BASE_URL + "/job/jobs",
    DELETE_JOB_POST_API: (jobPostId) => BASE_URL + `/job/delete/${jobPostId}`,
    DELETE_EXPIRED_JOB_POSTS_API:  BASE_URL + "/job/delete-expired-job-posts"
}