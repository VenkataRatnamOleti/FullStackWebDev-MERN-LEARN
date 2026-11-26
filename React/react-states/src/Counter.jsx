import { useState } from "react"

export default function Counter(){
    let [count, setCounter] = useState(0);
    console.log("Component Re-Rendered");
    function incCount(){
        setCounter(50);
    }
    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={incCount} className="counter">Increase</button>
        </div>
    );
} 