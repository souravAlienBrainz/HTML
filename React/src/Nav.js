import {Demo} from "./App"
import "./Nav.css"
function Nav({name}) {
  const imglink = 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
      <>
      <h1>Hey.........{name}</h1>
      <p>Hello   </p>
      <img className="img" src={imglink} alt="Loading....."></img>
      <Demo titale = "This is Eg of propes"/>
      </>
    );
  }

  export default Nav;