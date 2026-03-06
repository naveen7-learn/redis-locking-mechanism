import express from "express";
import bookingRoute from "./modules/booking/booking.route.js";

const app = express();

app.use(express.json());

app.use("/api", bookingRoute);

export default app;
