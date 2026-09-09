const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

Chat.insertMany([
  {
    message: "Hello",
    from: "Venkat",
    to: "Neha",
    created_at: new Date(),
  },
  {
    message: "How are you ?",
    from: "Venkat",
    to: "Riya",
    created_at: new Date(),
  },
  {
    message: "Your Welcome",
    from: "Venkat",
    to: "rithu",
    created_at: new Date(),
  },
  {
    message: "Good Bye..",
    from: "Venkat",
    to: "yasvi",
    created_at: new Date(),
  },
  {
    message: "We will meet in Sunday",
    from: "Venkat",
    to: "Ajiya",
    created_at: new Date(),
  },
])
  .then(() => {
    console.log("Inserted Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
