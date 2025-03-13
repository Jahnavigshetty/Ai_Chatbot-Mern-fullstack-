import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URI);
import http from "http";
import app from "./src/app.js";
import connectDB from "./src/config/db.connect.js";

const server = http.createServer(app);

const PORT = process.env.PORT;

console.log(process.env);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
});
