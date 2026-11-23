import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Publisher from "./models/Publisher.js";
import Magazine from "./models/Magazine.js";
import Tag from "./models/Tag.js";
import Article from "./models/Article.js";

dotenv.config();

const app = express();

console.log("Models loaded:", {
  Publisher: !!Publisher,
  Magazine: !!Magazine,
  Tag: !!Tag,
  Article: !!Article,
});

app.use(express.json());

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup error:", error.message);
    process.exit(1);
  }
};

startServer();
