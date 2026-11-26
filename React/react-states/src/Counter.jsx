import { useState } from "react"

export default function Counter(){
    let [count, setCounter] = useState(0); //initialize
    console.log("Component is Re-Rendered!");
    console.log(`count = ${count}`);

    function incCount(){
        console.log(`inside incCount before count = ${count}`);
        setCounter(count+1);
        console.log(`inside incCount after count = ${count}`);
    }

    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={incCount} className="counter">Increase</button>
        </div>
    );
} 