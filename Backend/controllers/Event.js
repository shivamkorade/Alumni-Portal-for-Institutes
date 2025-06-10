const { default: mongoose } = require("mongoose");
const Event = require("../models/Event");
const { uploadImageToCloudinary } = require("../utils/imageUploder");
require("dotenv").config();

exports.createEvent = async (req, res) => {
  try {
    const { title, description, startDate, endDate, address, organizer } =
      req.body;

    const coverImage = req.files.coverImage;

    if (
      !title ||
      !description ||
      !startDate ||
      !endDate ||
      !address ||
      !organizer ||
      !coverImage
    ) {
      console.error("All fields are required.");
      return res.status(400).json({
        success: false,
        message: "All fileds are required",
      });
    }

    // Upload coverImage to cloudinary
    const response = await uploadImageToCloudinary(
      coverImage,
      process.env.FOLDER_NAME
    );

    // Create event
    const newEvent = await Event.create({
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      address: address,
      organizer: organizer,
      coverImage: response.secure_url,
    });

    return res.status(200).json({
      success: true,
      message: "Event created successfully.",
      data: newEvent,
    });
  } catch (error) {
    console.error("Error while creating an event.", error);
    return res.status(500).json({
      success: false,
      message: "Error while creating an event.",
    });
  }
};

exports.editEvent = async (req, res) => {
  try {
    const {
      eventId,
      title,
      description,
      startDate,
      endDate,
      address,
      organizer,
    } = req.body;

    const coverImage = req.files.coverImage;

    if (!eventId) {
      console.error("EventId is required for edit the event.");
      return res.status(400).json({
        success: false,
        message: "Event Id is required for edit the event.",
      });
    }

    // Convert eventId to object format
    const objectId = new mongoose.Types.ObjectId(eventId);

    // Find event for the particular eventId
    const event = await Event.findById(objectId);

    if (!event) {
      console.error("Invalid eventId.");
      return res.status(400).json({
        success: false,
        message: "Invalid event Id.",
      });
    }

    if (
      !title ||
      !description ||
      !startDate ||
      !endDate ||
      !address ||
      !organizer ||
      !coverImage
    ) {
      console.error("All fields are required.");
      return res.status(400).json({
        success: false,
        message: "All fileds are required.",
      });
    }

    // Upload coverImage to Cloudinary
    const response = await uploadImageToCloudinary(
      coverImage,
      process.env.FOLDER_NAME
    );

    // Find event and update
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        title: title,
        description: description,
        startDate: startDate,
        endDate: endDate,
        address: address,
        organizer: organizer,
        coverImage: response.secure_url,
      },
      { new: true }
    );

    console.log("Event updated successfully.", updatedEvent);
    return res.status(200).json({
      success: true,
      message: "Event updated successfully.",
      data: updatedEvent,
    });
  } catch (error) {
    console.error("Error occur while editing event.", error);
    return res.status(500).json({
      success: false,
      message: "Error occur while editing event.",
    });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});

    console.log("Events are: ", events);
    return res.status(200).json({
      success: true,
      message: "All events fetched successfully.",
      data: events,
    });
  } catch (error) {
    console.error("Error occur while fetching all events data.", error);
    return res.status(500).json({
      success: false,
      message: "Error occur while fetching all events data.",
    });
  }
};

exports.cancelEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    if (!eventId) {
      console.error("eventId is required.");
      return res.status(400).json({
        success: false,
        message: "EventId not found.",
      });
    }

    // Conver eventId to objectId
    const objectId = new mongoose.Types.ObjectId(eventId);

    // Find event for given eventId
    const event = await Event.findById(objectId);

    if (!event) {
      console.error("Invalid event Id.");
      return res.status(400).json({
        success: false,
        message: "Invalid event Id.",
      });
    }

    // Delete event
    await Event.findByIdAndDelete(objectId);

    // Get updated events details
    const newEvents = await Event.find({});

    console.log("Event cancelled successfully.");
    console.log("Events after cancelling the event are: ", newEvents);

    return res.status(200).json({
      success: true,
      message: "Event cancelled successfully.",
      data: newEvents,
    });
  } catch (error) {
    console.error("Error while cancelling event.", error);
    return res.status(500).json({
      success: false,
      message: "Error while cancelling event.",
    });
  }
};
