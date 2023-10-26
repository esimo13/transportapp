import React from "react";
import { useState, useEffect } from "react";

const api_base = "http://localhost:3001/api";

const Map = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  /*
  // Function to send location updates to the server
  const sendLocationUpdate = () => {
    socket.emit("updateLocation", location);
  };

  useEffect(() => {
    // Listen for location updates from the server
    socket.on("locationUpdate", (updatedLocation) => {
      setLocation(updatedLocation);
    });

    return () => {
      socket.disconnect(); // Clean up the socket connection when the component unmounts
    };
  }, []);
*/
  // useEffect(() => {
  //   GetLocations();
  // }, []);

  // const GetLocations = () => {
  //   fetch(api_base + "/locations")
  //     .then((res) => res.json())
  //     .then((data) => setLocation(data))
  //     .catch((err) => console.error("Error: ", err));
  // };

  // Function to update the location on the server
  const updateLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Send the location data to the server
          const response = await fetch(api_base + "/updateLocation", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ latitude, longitude }),
          });

          if (!response.ok) {
            throw new Error("Failed to update location");
          }

          const data = await response.json();
          console.log(data.message); // Log the server response
        } catch (error) {
          console.error("Error updating location:", error);
        }
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };

  // Function to fetch the location from the backend
  const fetchLocation = async () => {
    try {
      const response = await fetch(api_base + "/locations"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch location");
      }

      const data = await response.json();
      if (data && data.length > 0) {
        const latestLocation = data[0]; // Assuming the latest location is at the beginning of the array
        setLocation(latestLocation);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch location initially
    fetchLocation();
    updateLocation();

    // Set up a timer to fetch location every 5 seconds
    const intervalId = setInterval(() => {
      fetchLocation();
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="App">
      <h1>Live Location Tracker</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
};

export default Map;
