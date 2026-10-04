const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/relationships");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findFullCustomers = async () => {
  let customers = await Customer.find({}).populate("orders");
  console.log(customers[0]);
}

findFullCustomers();

const findCustomers = async () => {
  let customers = await Customer.find({});
  console.log(customers);
};

// findCustomers();

const addCustomers = async () => {
  let cust1 = new Customer({
    name: "Venkata Ratnam Oleti",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let res = await cust1.save();
  console.log(res);
};

// addCustomers();

const addOrders = async () => {
  let res = await Order.insertMany([
    { item: "Chocolate", price: 12 },
    { item: "Chips", price: 10 },
    { item: "Samosa", price: 40 },
  ]);

  console.log(res);
};

// addOrders();
