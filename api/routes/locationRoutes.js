/*
// routes/locationRoutes.js
const express = require("express");
const router = express.Router();
const Location = require("../models/locationModel");
const getLocationUpdate = require("../controllers/locationController");

// Create a new location entry
router.post("/locations", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const newLocation = new Location({ latitude, longitude });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Retrieve all location entries
router.get("/locations", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Retrieve a specific location entry by ID
router.get("/locations/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }
    res.json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//getLocationUpdate
router.route("/updateLocation").post(getLocationUpdate);

module.exports = router;
*/
