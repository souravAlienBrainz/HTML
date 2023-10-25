
import './App.css';
import Video from './Components/Video'

function App() {

  const n  = "Hi...........?"
  setTimeout(() => {
    console.log("This is a App") 
  }, 3000);  
  return (
    <div>
    <h1>{n}.........</h1>
    <p>Hello   </p>
    <Demo></Demo>
    <Video></Video>
    </div>
  );
}

function Demo(propes){
  return(
  <div>
    <h1> This is A Demo function {propes.titale} </h1>
  </div>
  )
}

export  {App ,Demo}; 
