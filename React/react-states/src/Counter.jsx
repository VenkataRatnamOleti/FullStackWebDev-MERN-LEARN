import { useState } from "react"

export default function Counter(){
    let [count, setCounter] = useState(0);
    function incCount(){
        // setCounter(count+1);
        // setCounter(count+1); will not work

        setCounter((currCount) => {
            return currCount+1;
        });
        setCounter((currCount) => {
            return currCount+1;
        });
    }
    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={incCount} className="counter">Increase</button>
        </div>
    );
} 