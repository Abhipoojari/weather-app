require("dotenv").config();
const express = require("express");

// express app
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/workouts", workoutRoutes);
//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Database connection error:", error); // ✅ Proper error logging
  });
