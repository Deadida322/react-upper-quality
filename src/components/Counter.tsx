import React, { useState } from "react"
import "./Conter.scss"
import * as classes from "./Counter.module.scss";
console.log(classes)
export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>{count}</div>
            <button className={classes.btn} onClick={()=>setCount(prev=>prev+1)}>+</button>
        </>
    )
}