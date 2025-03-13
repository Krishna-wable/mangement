const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes"); 
const taskRoutes = require("./routes/taskRoutes"); // ✅ Ensure this is included

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes); // ✅ Ensure this route is added

const PORT = process.env.PORT || 3008;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
