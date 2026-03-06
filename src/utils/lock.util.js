import { redisClient } from "../config/redis.js";

export const acquireLock = async (key, token, ttl = 10) => {
  try {
    const result = await redisClient.set(key, token, {
      NX: true,
      EX: ttl
    });

    return result === "OK";

  } catch (error) {
    console.error("Error acquiring lock:", error);
    return false;
  }
};

export const releaseLock = async (key, token) => {
  try {
    const currentValue = await redisClient.get(key);

    if (currentValue === token) {
      await redisClient.del(key);
    }

  } catch (error) {
    console.error("Error releasing lock:", error);
  }
};
