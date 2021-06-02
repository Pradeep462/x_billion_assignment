import React from 'react';
import './ChatSection.css';
import ChatList from './ChatList/ChatList.js';
import ChatRoom from './ChatRoom/ChatRoom.js';


const ChatSection = () => {

     

    return (
        <div className="chatSection">
             <ChatList />
             <ChatRoom />
        </div>
    );
};

export default ChatSection;