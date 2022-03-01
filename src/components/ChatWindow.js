import React, { useState, useEffect , useRef} from "react";
import "./ChatWindow.css";
import Chat from "./Chat";
import chatbotimg from "../image/chatbotimg.jpg";

const ChatWindow = (props) => {
  let arr = [];
  if (props.myArray !== null) arr = props.myArray;

  const inputVal= useRef();
  const [inputChatArray, setInputChatArray] = useState(arr);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputVal.current.value.trim().length > 0) {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes();

     

      console.log(time);
      setInputChatArray((prevChat) => {
        return [{ text: inputVal.current.value, time: time }, ...prevChat];
      });

     
      console.log(inputChatArray);
     }
  };

  useEffect(()=>{
    inputVal.current.value="";
    localStorage.setItem("my_array", JSON.stringify(inputChatArray)); 
  },[inputChatArray]);

  return (
    <div className="chat">
      <div className="chatWindow">
        <div className="header">
          <img src={chatbotimg} alt=" " className="avatar"></img>
          <span className="username"> Hi I m ur MirrorImg</span>
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
