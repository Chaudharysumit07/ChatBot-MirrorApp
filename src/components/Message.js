import React from "react";
import "./Message.css";

const Message = (props) => {
  return (
    //displaying bot reply
    <>
      <div className="botMessage">
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
