import React from "react";
import ChatWindow from "./ChatWindow";
import "./MainWindow.css";

const MainWindow = () => {
  //retrieving the array that is stored in local storage
  var array = JSON.parse(localStorage.getItem("my_array"));
 

  return (
    <div className="mainWindow">
      <h1>Chat App Mirror Bot</h1>
      {/* passing the array which is retrieved to ChatWindow component */}
      <ChatWindow myArray={array} />
    </div>
  );
};

export default MainWindow;
