import { apiConnector } from "../apiConnector";
import { eventEndPoints } from "../apis";
import toast from "react-hot-toast";

const { CREATE_EVENT_API, EDIT_EVENT_API, GET_ALL_EVENTS_API, CANCEL_EVENT_API } =
  eventEndPoints;

// Function to get all events
export const getAllEvents = async () => {
    const toastId = toast.loading("Loading...");
    let result = [];

    try {
        const response = await apiConnector("GET", GET_ALL_EVENTS_API);

        if(!response.data.success) {
            throw new Error(response.data.message);
        }

        result = response.data.data;
    } catch (error) {
        console.error("Get all events API error.", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

// Function to create an event
export const createEvent = async (eventData, token) => {
  const toastId = toast.loading("Loading...");
  let result = null;

  try {
    const response = await apiConnector(
      "POST",
      CREATE_EVENT_API,
      eventData,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("Create event API response.", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Event created successfully.");
    result = response.data.data;
  } catch (error) {
    console.error("Error creating event:", error);
    toast.error(error?.response?.data?.message);
  }

  toast.dismiss(toastId);
  return result;
};


// Function to edit an event
export const editEvent = async (eventData, token) => {

    const toastId = toast.loading("Loading...");
    let result = null;

    try {
      const response = await apiConnector("PUT", EDIT_EVENT_API, eventData, {
        Authorization: `Bearer ${token}`,
      });
      
      console.log("Edit event API response.", response);

      if(!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Event created successfully.");
      result = response.data.data
    } catch (error) {
      console.error("Error editing event:", error);
      toast.error(error?.response?.data?.message);
    }

    toast.dismiss(toastId);
};

// Function to cancel an event
export const cancelEvent = async (eventId, token) => {
    const toastId = toast.loading("Loading...");

    try {
        const response = await apiConnector("DELETE", CANCEL_EVENT_API(eventId), null, {
            Authorization: `Bearer ${token}`
        });

        console.log("Cancel event API response.", response);

        if(!response.data.success) {
            throw new Error(response.data.message);
        }

        toast.success("Event canceled successfully.");
    } catch (error) {
        console.error("Cancel event API error.", error);
        toast.error(error?.response?.data?.message);
    }

    toast.dismiss(toastId);
}
