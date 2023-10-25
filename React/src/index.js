import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App ,Demo} from './App';
import  Nav from './Nav'
import Img from './Img';
import Playbtn from './Components/Playbtn';
import ClassCom from './Components/ClassCom';
import Profile from './Components/Profile';
import UseStateHookEg from './Components/UseStateHookEg';
import imgNames from "./Data/data"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <UseStateHookEg></UseStateHookEg>
    </div>
    {/* <Profile name = "demo"></Profile> */}
    {imgNames.map(img =><Profile name = {img.name} id ={img.id}></Profile>
    )}
    <Playbtn msg='Play Video' name='Btn for Paly Video' onPlay = {()=>{alert("You Click on Play Btn.......")}}>Play ....</Playbtn>
    <ClassCom></ClassCom>
    <App />
    <Nav name ="## Joy" />
    <Demo />
    <Img isShowImg = {true}/>
    <Img isShowImg = {false}/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

