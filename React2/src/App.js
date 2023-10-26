
import { useContext, useState } from 'react';
import './App.css';
import Video from './Components/Video'
import Themecontact from './Context/Themecontact';
import Nav from './Nav'
import Img from './Img';
import Playbtn from './Components/Playbtn';
import ClassCom from './Components/ClassCom';
import Profile from './Components/Profile';
import UseStateHookEg from './Components/UseStateHookEg';
import imgNames from "./Data/data"
import ContextEx from './Context/ContextEx';
import ReducerEg from './Components/ReducerEg';
import useContextEx from './CustomeHooks/CustomeHooksEg';
import UesRefEx from './Components/UesRefEx';

function App() {
  const userConText = useContext(Themecontact)
  console.log(userConText)

  const [value, setValue] = useState({ name: "Joy 12" })

  console.log("This is a Eg of custome Hooks "+useContextEx().name)

  const n = "Hi...........?"
  setTimeout(() => {
    console.log("This is a App")
  }, 3000);
  return (
    <div>
      <div>
        <UesRefEx></UesRefEx>
      </div>
      <div>
        <ReducerEg></ReducerEg>
      </div>

      <div>
        <UseStateHookEg></UseStateHookEg>
      </div>
      <ContextEx.Provider value={value}>
        <Demo></Demo>
        <Video></Video>
      </ContextEx.Provider>
      {/* <Profile name = "demo"></Profile> */}
      {imgNames.map(img => <Profile key={img.id} name={img.name} id={img.id}></Profile>
      )}
      <Playbtn msg='Play Video' name='Btn for Paly Video' onPlay={() => { alert("You Click on Play Btn.......") }}>Play ....</Playbtn>
      <ClassCom></ClassCom>
      {/* <App /> */}
      <Nav name="## Joy" />

      <Img isShowImg={true} />
      <Img isShowImg={false} />
      <h1>{n}.........</h1>
      <p>Hello   </p>
    </div>
  );
}

function Demo(propes) {
  const contactValue = useContext(ContextEx)
  return (
    <div>
      <h1> This is A Demo function {propes.titale}  <br></br> And Contaxt Value is {contactValue.name}</h1>
    </div>
  )
}

export { App, Demo };




