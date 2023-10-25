
import "./Nav.css"

function Img({isShowImg}){

    const src = "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const src1 = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let imgToshow;

    if(isShowImg){
        imgToshow = <img className = "img" src={src} alt="Loading"></img>
    }else{
        imgToshow = <img className = "img" src={src1} alt="Loading"></img>
    }
    return(
        <>
        {isShowImg ? <p>This is Car</p> :<p>This is a Bike</p>}
        {isShowImg && 	'&#x2705'}
        {imgToshow}        
        </>
    )
}

export default Img;