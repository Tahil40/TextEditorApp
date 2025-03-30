import './App.css';
import Navbar from './components/navbar';
import Body from './components/Body';
import Form from './components/Form';
import React, { useState } from 'react';
import Alert from './components/Alert';

/*
Two types of components are used in react....
1.) className based components.
2.) function based components.
*/

// function based components............
function App() {
  // Adding useState to add dark mode functionality for nabvar.......
  const [darkmode, set_darkmode] = useState("light");  
  
  // Adding useState to add dismissible alert functionality..........
  const [alert, set_alert] = useState(false);

  // creating method to handle dismissible alert functionality........
  const show_alert = (message, type)=>{
    set_alert({
      msg:message, 
      msg_type:type
  })
  setTimeout(() => {
    set_alert("");
  }, 2000);
  }

  // creating function to remove background color after adding.............
  // const remove_bg_color = (color_name)=>{
  //   document.body.classList.remove(color_name);
  // }

  // creating method to handle dark mode functionality for nabvar.......
  const mode_button_click = ()=>{
    // document.body.classList.add('bg-'+cls);
    // remove_bg_color(cls); 
    if(darkmode==="light"){
      set_darkmode("dark");
      document.body.style.backgroundColor = "black"; 
      show_alert("Dark Mode Enabled Successfully....", "Success");
      // document.title = "DarkMode-Enabled";

      // run this programme again and again........
      // setInterval(() => {
      //   document.title = "DarkMode-Enabled";
      // }, 2000);
    }           
    else{
      set_darkmode("light");                   
      document.body.style.backgroundColor = "white";
      show_alert("Light Mode Enabled Successfully.....", "Success");
      // document.title = "LightMode-Enabled";
      // setInterval(() => {
      //   document.title = "LightMode-Enabled";
      // }, 2000); 
    }
  } 
              
  return (
    // Adding own jsx(fragments).......
    <>                                                          
    {/* Adding navbar */}
    <Navbar title="Text Editor" mode={darkmode} mode_button_click={mode_button_click}/>

    {/* Adding dismissible alert....... */}
    <Alert  alert={alert} />  

    {/*Adding body*/}
    <Body/>

    {/* Adding form */}
    <Form show_alert={show_alert}/>
    </>
  );
}

export default App;