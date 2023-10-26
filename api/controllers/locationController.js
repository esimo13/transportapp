/*
const Location = require("../models/locationModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

setInterval(async () => {
  exports.getLocationUpdate = catchAsyncErrors(async (req, res) => {
    const { latitude, longitude } = req.body;

    await Location.deleteMany({});
    try {
      // Save the received location data to the database (MongoDB in this example)
      const locationRecord = new Location({ latitude, longitude });
      await locationRecord.save();

      res.status(200).json({ message: "Location updated successfully" });
    } catch (error) {
      console.error("Error updating location:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}, 5000);
*/
