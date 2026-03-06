import express from "express";
import bookingRoute from "./modules/booking/booking.route.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api", bookingRoute);

// health check route (helps test server)
app.get("/", (req, res) => {
  res.send("Redis Seat Locking API Running");
});

export default app;
