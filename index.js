import app from "./app.js";
import { connectDb } from "./db.js";
import "dotenv/config.js";
connectDb();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("server on port", PORT);
});
