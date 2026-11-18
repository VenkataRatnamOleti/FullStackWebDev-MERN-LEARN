function handleClick(event) {
  console.log("Hello!");
  console.log(event);
}

function handleHover() {
  console.log("Paragraph");
}

function handleDblClick(){
    console.log("Double Click");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onMouseOver={handleHover}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odio
        maiores voluptatem nihil recusandae aperiam. Excepturi iste ea nihil
        illum sed harum qui id omnis quibusdam provident molestias atque cum
        repudiandae soluta eligendi aspernatur in sequi ab iusto, suscipit sint
        accusantium? Et dignissimos voluptates, vel suscipit possimus totam ut
        deleniti!
      </p>
      <button onDoubleClick={handleDblClick}>Double Click Button</button>
    </div>
  );
}
