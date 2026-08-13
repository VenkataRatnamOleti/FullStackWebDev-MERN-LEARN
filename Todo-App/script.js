let form = document.querySelector("form");
let ul = document.querySelector("ul");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let input = document.querySelector("input");
    let todo = input.value;
    input.value = "";
    let li = document.createElement("li");
    li.innerText = todo;
    ul.appendChild(li);
})