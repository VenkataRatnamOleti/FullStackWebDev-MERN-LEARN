const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/relationships");
}

const userSchema = new Schema({
  name: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addUserPost = async () => {
  const user1 = new User({
    name: "Vishnu",
    email: "vishnu@vishnu.com",
  });

  let post1 = new Post({
    content: "Hello World!",
    likes: 99,
  });

  post1.user = user1;

  await user1.save();
  await post1.save();

  //   let res1 = await user1.save();
  //   let res2 = await post1.save();

  //   console.log(res1);
  //   console.log(res2);
};

addUserPost();