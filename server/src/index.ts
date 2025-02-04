import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/* Route Imports */
import ProjectRoutes from "./routes/ProjectRoutes";
import TaskRoutes from "./routes/TaskRoutes";
import SearchRoutes from "./routes/SearchRoutes";
import UserRoutes from "./routes/UserRoutes";
import TeamRoutes from "./routes/TeamRoutes";

/* Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.get("/", (req, res) => {
    res.send("This is Home Route");
});

app.use("/projects", ProjectRoutes);
app.use("/tasks", TaskRoutes);
app.use("/search", SearchRoutes);
app.use("/users", UserRoutes);
app.use("/teams", TeamRoutes);

/* Server */
const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on Port ${port}`);
});