export default function Price({ price }) {
  const styles = {
    backgroundColor: "rgb(233, 202, 122)",
    padding: " 1rem",
    borderRadius: "0 0 25px 25px",
  };
  return (
    <div style={styles}>
      <strike>{price[0]}</strike>&nbsp;&nbsp;<b>{price[1]}</b>
    </div>
  );
}
