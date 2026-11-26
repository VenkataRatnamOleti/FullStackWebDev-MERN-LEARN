import { useState } from "react"

function init(){
    console.log("Init Function Called");
    return Math.random();
}
export default function Counter(){
    let [count, setCounter] = useState(init()); // called init() for every render and re-render
    // let [count, setCounter] = useState(init); // used for initialization of state only
    function incCount(){
        setCounter(count+1);
    }
    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={incCount} className="counter">Increase</button>
        </div>
    );
} 