import "./Product.css";

function Product({
  title = "TITLE",
  description = "DESCRIPTION",
  price = 0,
  features,
}) {
  const List = features.map((feature) => <li>{feature}</li>);
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>{description}</h5>
      <h6>Price: {price}</h6>
      <p>{List}</p>
    </div>
  );
}

export default Product;
