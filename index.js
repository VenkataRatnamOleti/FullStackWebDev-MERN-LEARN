let div = document.querySelector('div');
let btn = document.querySelector('button');
let h2 = document.querySelector('h2');



btn.addEventListener("click",function(){
    let randomR = Math.floor(Math.random()*255);
    let randomG = Math.floor(Math.random()*255);
    let randomB = Math.floor(Math.random()*255);

    h2.innerText = `rgb(${randomR},${randomG},${randomB})`;
    div.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
})