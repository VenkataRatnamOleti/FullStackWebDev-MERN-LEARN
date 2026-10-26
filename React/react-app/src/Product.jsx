import "./Product.css";

function Product({
  title = "TITLE",
  description = "DESCRIPTION",
  price = 0,
  features,
}) {
  let isDiscount = price > 2000;
  const List = features.map((feature) => <li>{feature}</li>);
  let styles = {backgroundColor: isDiscount ? "yellow" : ""};
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>{description}</h5>
      <h6>Price: {price}</h6>
      <p>{isDiscount && <i>5% Discount Added</i>}</p>
      <p>{List}</p>
    </div>
  );
}

export default Product;
