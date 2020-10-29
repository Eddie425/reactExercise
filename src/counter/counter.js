import React from "react";
import {useState} from "react";

function Counter(props){
    let [count, setCount] = useState(1);
    let [color, setColor] = useState("red");
    let update = function(){
        setCount(count + 1);
        setColor("blue")
    }
    return <button style={{color:color}} onClick={update}>{count}</button>;
}
// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return <button>1</button>;
//     }
// }
export default Counter;