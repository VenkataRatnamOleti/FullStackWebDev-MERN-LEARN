function print(){
    console.log("Hello!");
}

function printPara(){
    console.log("Paragraph")
}

export default function Button(){
    return(
        <div>
            <button onClick={print}>Click Me</button>
            <p onClick={printPara}>This Parah is for event demo</p>
        </div>
    )
}