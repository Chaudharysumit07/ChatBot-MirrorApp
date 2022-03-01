import React, { useState, useEffect, useRef } from "react";
import "./ChatWindow.css";
import Chat from "./Chat";
import chatbotimg from "../image/chatbotimg.jpg";

const ChatWindow = (props) => {
  //declaring array arr to store the array this passed through props
  let arr = [];
  //initially when local storage is empty props.myArray returns null
  if (props.myArray !== null) arr = props.myArray;
  
  
  const inputVal = useRef();
  //using useState hook to update existing array which stores the chat msg and time as a object
  const [inputChatArray, setInputChatArray] = useState(arr);

  //when send button is clicked onSubmitHandler function gets called
  const onSubmitHandler = (event) => {
    //preventing the default action
    event.preventDefault();

    //NO-Action when no msg is typed but send button is pressed
    if (inputVal.current.value.trim().length > 0) {

      //getting the current time when message 
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes();

      //updating the existing array of messages with new message sent
      setInputChatArray((prevChat) => {
        return [{ text: inputVal.current.value, time: time }, ...prevChat];
      });
    }
  };
  //useEffect hook use to reset input field of chat window after sending the message 
  useEffect(() => {
    inputVal.current.value = "";
    //updating the array in the local storage
    localStorage.setItem("my_array", JSON.stringify(inputChatArray));
  }, [inputChatArray]);

  return (
    <div className="chat">
      <div className="chatWindow">
        <div className="header">
          <img src={chatbotimg} alt=" " className="avatar"></img>
          <span className="username"> Hi I am your MirrorImg</span>
        </div>

        <div className="chatSection">
          {" "}
          <Chat chatArray={inputChatArray} />
        </div>
        <div className="footer">
          <form onSubmit={onSubmitHandler}>
            <div className="inputClass">
              <input
                id="inputVal"
                type="text"
                placeholder="write a message"
                ref={inputVal}
              />

              <button type="submit"> Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
