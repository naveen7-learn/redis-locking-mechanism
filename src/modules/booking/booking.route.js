import express from "express";
import { bookSeat } from "./booking.controller.js";

const router = express.Router();

// booking endpoint
router.post("/book/:seatId", bookSeat);

export default router;
