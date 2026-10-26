import Product from "./Product";

function ProductList() {
  const styles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    flexWrap: "wrap",
  };
  const features = [
    ["8000 DPI", "5 Programmable Buttons"],
    ["Intuitive Touch Surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "Intuitive Touch Surface"],
    ["Wireless Mouse 2.4GHz", "Optical Orientation"],
  ];

  const prices = [
    [12495, 8999],
    [11900, 9199],
    [1599, 899],
    [599, 278],
  ];
  return (
    <div style={styles}>
      <Product
        features={features[0]}
        title="Logitech MX Master"
        price={prices[0]}
      />
      <Product
        features={features[1]}
        title="Apple Pencil (2nd Gen)"
        price={prices[1]}
      />
      <Product features={features[2]} title="Zebronics" price={prices[2]} />
      <Product
        features={features[3]}
        title="Petronics Toad"
        price={prices[3]}
      />
    </div>
  );
}

export default ProductList;
