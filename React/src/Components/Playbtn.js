import "./Playbtn.css"

function Playbtn({msg = "Def..Msg",name ="Def.. Name",children , onPlay}){
    
function handelbtn(event){
    event.stopPropagation();
    console.log(">>>>"+event)
    console.log(`Paly this ${msg}`)
    onPlay()
}

    return(
        <button className="button2" onClick={handelbtn} >{children}</button>
    )
}

export default Playbtn;