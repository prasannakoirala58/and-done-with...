const mongoose = require("mongoose");

const userVerificationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Please add the user ID"],
    },
    uniqueString: {
      type: String,
      required: [true, "Please add the unique string"],
    },
    createdAt: {
      type: Date,
      required: [true, "Please add the creation date"],
    },
    expiresAt: {
      type: Date,
      required: [true, "Please add the expiration date"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserVerification", userVerificationSchema);
