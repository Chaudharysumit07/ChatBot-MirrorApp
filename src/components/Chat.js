
import React, { useEffect, useRef } from 'react';
import "./Chat.css";
import Message from "./Message";
const Chat=(props)=>{


 
    const messagesEndRef = useRef(null);

  const scrollToTop = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }



    

    useEffect(() => {
        scrollToTop()
      }, [props.chatArray]);



    return(
        
          <div className="chatBackground">
            <div ref={messagesEndRef} />
          { props.chatArray.map((item,index) => (
            <Message
              key={index}
              textMessage={item.text}
              time={item.time}
            />
          ))}
          
          </div>
          
          
          )}



export default Chat;