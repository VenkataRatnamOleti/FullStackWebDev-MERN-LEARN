const mongoose = require("mongoose");
const ChatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  created_at: {
    type: Date,
  },
});

const Chat = new mongoose.model("Chat", ChatSchema);

module.exports = Chat;
