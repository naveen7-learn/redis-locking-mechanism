import { v4 as uuidv4 } from "uuid";
import { acquireLock, releaseLock } from "../../utils/lock.util.js";
import { getSeat, bookSeat } from "./booking.model.js";

export const bookSeatService = async (seatId) => {

  const lockKey = `lock:seat:${seatId}`;
  const token = uuidv4();

  const lockAcquired = await acquireLock(lockKey, token);

  if (!lockAcquired) {
    return {
      status: 423,
      message: "Seat is currently locked. Try again."
    };
  }

  try {

    const seat = getSeat(seatId);

    if (!seat) {
      return {
        status: 404,
        message: "Seat not found"
      };
    }

    if (seat === "booked") {
      return {
        status: 400,
        message: "Seat already booked"
      };
    }

    bookSeat(seatId);

    return {
      status: 200,
      message: `Seat ${seatId} booked successfully`
    };

  } finally {

    await releaseLock(lockKey, token);

  }
};
