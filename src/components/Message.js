import React from "react";
import "./Message.css";
import chatbotimg from "../image/chatbotimg.jpg";

const Message = (props) => {
  return (
    //displaying bot reply
    <>
      <div className="botMessage">
        <img className="botAvatar" src={chatbotimg} alt=""></img>
        <span className="textmsg">{props.textMessage}</span>
        <br />
        <span className="textTime">{props.time}</span>
      </div>
      {/* displaying users message */}
      <div className="message">
        <span className="textmsg">{props.textMessage}</span>
        <br />
        <span className="textTime">{props.time}</span>
      </div>
    </>
  );
};

export default Message;
