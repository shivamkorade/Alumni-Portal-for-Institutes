const express = require("express");
const router = express.Router();

const {
  createEvent,
  editEvent,
  getAllEvents,
  cancelEvent,
} = require("../controllers/Event");
const { auth, isAdmin } = require("../middlewares/auth");

router.post("/add", auth, isAdmin, createEvent);
router.put("/edit", auth, isAdmin, editEvent);
router.get("/events", getAllEvents);
router.delete("/cancel/:eventId", auth, isAdmin, cancelEvent);

module.exports = router;
