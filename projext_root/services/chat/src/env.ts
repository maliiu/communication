import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.CHAT_PORT) || 4100,
  mongoUri: process.env.MONGO_URI ?? "mongodb://mongodb:27017/chatapp",
  redis: {
    host: process.env.REDIS_HOST ?? "127.0.0.1:6379",
    port: Number(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD ?? "123456"
  }
};
