const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true, // ✅ spelling fixed
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // ✅ key fixed
);

module.exports = mongoose.model("Workout", workoutSchema); // ✅ Capital W is conventional
