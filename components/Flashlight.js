// Set up the Flashlight class:
class Flashlight {
    constructor(
      id,
      name,
      size,
      color,
      lightOpen,
      dateAcquired,
      image
    ) {
      this.id = id;
      this.name = name;
      this.size = size;
      this.color = color;
      this.lightdOpen = lightOpen;
      this.dateAcquired = dateAcquired;
      this.image = image;
    }
    toggleLight(lightStatus) {
      this.lightOpen = lightStatus;
    }
    flashlightAge() {
      let now = new Date();
      let acquired = new Date(this.dateAcquired);
      let elapsed = now - acquired; // elapsed time in milliseconds
      let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
      return daysSinceAcquired;
    }
  }
  
  // Export the Backpack class to be used by other files
  export default Flashlight;