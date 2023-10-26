import { useState } from "react";
import "./Playbtn.css"

function UseStateHookEg(){
    
    const [num ,setNum] = useState(0);
    function handleclick(event){
        event.stopPropagation();
        setNum(num=>num+1);
    }

    return(
        <>
        <h1>{num}</h1>
        <button className="button2" onClick={handleclick}>Add</button>
        </>
    )
}

export default UseStateHookEg