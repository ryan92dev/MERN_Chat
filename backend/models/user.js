const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    jobTitle: {
      type: String,
      required: true,
    },

    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_960_720.png",
    },

    status: {
      type: String,
      default: "Hey there! I am using ChatApp.",
    },

    location: {
      type: String,
      default: "Earth, Earth",
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    friendRequestsSent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    friendRequestsReceived: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    refreshToken: [String],
  },
  {
    timestamps: true,
  }
);

// Remove Password and change ID from JSON response
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  const id = userObject._id;

  delete userObject._id;
  delete userObject.password;
  delete userObject.__v;
  delete userObject.createdAt;
  delete userObject.updatedAt;
  delete userObject.refreshToken;

  userObject.id = id;
  return userObject;
};

// Hash password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  const user = this;
  return await bcrypt.compare(enteredPassword, user.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
