const seats = {
  "1": "available",
  "2": "available",
  "3": "available"
};

export const getSeat = (seatId) => {
  return seats[seatId];
};

export const bookSeat = (seatId) => {
  seats[seatId] = "booked";
};
