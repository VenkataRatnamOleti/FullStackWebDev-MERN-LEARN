import { useState } from "react"

export default function Counter(){
    let [count, setCounter] = useState(0);

    function incCount(){
        setCounter(count+1);
    }

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>Increase</button>
        </div>
    );
} 