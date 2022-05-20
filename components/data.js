// Import the Flashlight class so we can make a new flashlight object.
import Flashlight from "./Flashlight.js";

// Create new flashlight object:
const basicFlashlight = new Flashlight(
  "flashlight01",
  "Basic flashlight",
  25,
  "Grey",
  false,
  "January 23, 2022 15:00:00 PST",
  "../images/flashlight-off.svg"
);

// Create new flashlight object:
const kidFlashlight = new Flashlight(
    "flashlight02",
    "Kid flashlight",
    10,
    "Green",
    false,
    "October 23, 2021 15:00:00 PST",
    "../images/flashlight-off-kid.svg"
);

// Add flashlight objects into an array
const flashlightObjectArray = [basicFlashlight, kidFlashlight];

// Export the array to be used in other files
export default flashlightObjectArray;
