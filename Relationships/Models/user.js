const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successfull"))
  .catch((err) => {
    console.log(err);
  });

async function  main() {
    await mongoose.connect("mongodb://localhost:27017/relationships");
}

const userSchema = new Schema({
    username: String,
    addresses : [
        {
            _id:false,
            location: String,
            city: String,
        },
    ],
})

const User = mongoose.model("User",userSchema);

const addUser = async () => {
    let user1 = new User({
        username: "Venkata Ratnam",
    });

    user1.addresses.push({location:"Ramaraopeta",city:"Kakinada"});
    user1.addresses.push({location:"Jagannaickpur",city:"Kakinada"});

    let result = await user1.save();
    console.log(result);
}

addUser();
