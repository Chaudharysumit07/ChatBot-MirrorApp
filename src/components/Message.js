import React from "react";
import "./Message.css";

const Message = (props) => {

  console.log( props.textMessage+ " "+props.time);
  
    return (
      <>
      <div className="botMessage">
        <span className="textmsg">{props.textMessage}</span>
        <br />
        <span className="textTime">{props.time}</span>
      </div>
      <div className="message">
        <span className="textmsg">{props.textMessage}</span>
        <br />
        <span className="textTime">{props.time}</span>
      </div>
      
      </>
    );
  
};

export default Message;
