import React from "react";
import ChatWindow from "./ChatWindow"
import "./MainWindow.css"

const MainWindow=()=>{


  var array = JSON.parse(localStorage.getItem("my_array")); //get them back
console.log(array);
  

    return(
    <div className="mainWindow" >
      <h1>Chat App Bot</h1> 
    <ChatWindow myArray={array}/>
    </div>
    );

};

export default MainWindow;