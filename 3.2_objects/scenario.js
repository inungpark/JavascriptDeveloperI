//She wants to modify the reservable method to make it more flexible. 
//She wants it to report on either canReserve or open property, 
//depending on which property is passed as parameter
//he would also like to retrieve information about availability by
// adding a getter method for the available property. 
//The room is available if both the canReserve and open properties are set to true. 
//She also wants to be able to change the open property by setting the available property. 

let meetingRoom = {
  canReserve: true,
  capacity: 30,
  open: true,
  reservable(prop) {
    return this[prop];
  }, // Modify this so it can report on 'canReserve' or 'open'.
  get available() {
    if (this.canReserve && this.open) {
      return true;
    }
    return false;
  },
  set available(val) {
    this.open = val;
  },
};

let boardRoom = Object.assign({}, meetingRoom);
boardRoom.capacity = 20;

// Add getter and setter methods for the 'available' property.
