import { createClient } from "redis";

let redisClient;

export const connectRedis = async () => {

  try {

    redisClient = createClient({
      url: process.env.REDIS_URL
    });

    redisClient.on("error", (err) => {
      console.error("Redis Error:", err);
    });

    await redisClient.connect();

    console.log("Redis connected successfully");

  } catch (error) {

    console.error("Redis connection failed:", error);

  }

};

export { redisClient };
