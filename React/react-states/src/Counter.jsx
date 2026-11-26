import { useState } from "react"

export default function Counter(){
    let [count, setCounter] = useState(0);
    function incCount(){
        if(count == 1){
            setCounter(0);
        }else{
            setCounter(1)
        }
    }
    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={incCount} className="counter">Increase</button>
        </div>
    );
} 