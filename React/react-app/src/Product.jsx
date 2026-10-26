import "./Product.css";
import Price from "./Price";

function Product({ title, price, features }) {
  const styles = {
    border: "1px solid black",
    borderRadius: "25px",
    width: "20rem",
    textAlign: "center",
    backgroundColor: "skyblue",
  };
  return (
    <div style={styles}>
      <h4>{title}</h4>
      {features.map((feature) => (
        <p>{feature}</p>
      ))}
      <Price price={price}></Price>
    </div>
  );
}

export default Product;
