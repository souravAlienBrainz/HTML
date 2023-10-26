import { useEffect, useRef } from "react";

function UesRefEx() {

    let num = useRef(0)
    const userref = useRef(null)

    function add() {
        num.current++;
        console.log('num.current = ' + num.current)

    }

    useEffect(()=>{
        userref.current.placeholder  = "Hello"
        userref.current.focus()
    },[])

    

    return (
        <>
            <h1>{num.current}</h1>
            <button onClick={add}>Add</button>
            <input ref={userref} title="Enter Value" ></input>
        </>
    )
}
export default UesRefEx;