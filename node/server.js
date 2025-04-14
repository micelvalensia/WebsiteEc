import express from "express"
import cors from "cors"
import db from "./db/db.js"
import userRoutes from "./routes/router.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    method: "GET, POST",
    credentials: true,
}));
app.use(cookieParser())
app.use(express.json())
app.use('/uploads', express.static('uploads'));


db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
});

app.use("/", userRoutes)

app.listen(8092, () => {
    console.log("Server is running on port 8092")
})