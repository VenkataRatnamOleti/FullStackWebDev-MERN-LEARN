const express = require("express");
const mongoose = require("mongoose");
const Chat = require("./models/chats.js");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
const port = 8080;

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

app.get("/", (req, res) => {
  res.redirect("/chats");
});

app.get("/chats", async (req, res) => {
  let allChats = await Chat.find({});
  res.render("home.ejs", { allChats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", async (req, res) => {
  let { message, from, to } = req.body;
  const newChat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date(),
  });
  await newChat.save();
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.patch("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message } = req.body;
  await Chat.findByIdAndUpdate(id, { message });
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});
