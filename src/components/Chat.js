import React, { useEffect, useRef } from "react";
import "./Chat.css";
import Message from "./Message";
const Chat = (props) => {
  //useRef hook to by default scroll down to bottom of chat section pointing to latest message 
  const messagesEndRef = useRef(null);

  const scrollToTop = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [props.chatArray]);

  return (
    <div className="chatBackground">
      <div ref={messagesEndRef} />
      {props.chatArray.map((item, index) => (
        //setting key for each message child component
        <Message key={index} textMessage={item.text} time={item.time} />
      ))}
    </div>
  );
};

export default Chat;
