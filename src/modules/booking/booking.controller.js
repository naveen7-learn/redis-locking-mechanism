import { bookSeatService } from "./booking.service.js";

export const bookSeat = async (req, res) => {

  try {

    const { seatId } = req.params;

    const result = await bookSeatService(seatId);

    res.status(result.status).json({
      message: result.message
    });

  } catch (error) {

    console.error("Booking error:", error);

    res.status(500).json({
      message: "Internal server error"
    });

  }

};
