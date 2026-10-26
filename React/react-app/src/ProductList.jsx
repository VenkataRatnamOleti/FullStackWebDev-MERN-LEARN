import Product from "./Product";

function ProductList() {
//   let options = [<li>Hi-Tech</li>, <li>durable</li>, <li>fast</li>]; option-1
let options = ["Hi-Tech","Durable","Fast"];
  return (
    <>
      <Product features={options}></Product>
      <Product features={options} price={40000}></Product>
    </>
  );
}

export default ProductList;
