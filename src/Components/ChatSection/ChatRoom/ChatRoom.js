import React, {useEffect, useState} from 'react';
import './ChatRoom.css'
import data from './jsondata1.js';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';

const ChatRoom = () => {
    const [chatData , setChatData] = useState([]);
    const [typechat , setTypechat] = useState("");

      useEffect(()=>{
        const Data = data[0].data.chats;
        setChatData(Data);
      },[]);

      const getMessage = (e) => {
      
         setTypechat(e.target.value);

       }

    
      const renderChat = () =>{

           if(chatData.length <= 8){
          
           const chatitem = {message: `${typechat}`, userType: "admin"};
           

           const copyChatData = [...chatData , chatitem];
           setChatData(copyChatData);
           
           }
      }
      
    
   // console.log(chatData);

    return (
        <div className="chatroom">
            <div className="chat">
                  <div className="chatting">
                       {chatData.map((chat , index) => {
                         return  <div key={index} className={`${chat.userType}`}>
                                     <div  className="item-container">
                                         {`${chat.message}`}
                                      </div>
                            </div> 
                       })}
                  </div>
            </div>
            <div className="InputItems">
                  <div className="divitem">
                      <AttachmentIcon />
                   </div>
                 <div className="inputItem divitem">
                     <input placeholder="Enter Message Here" onKeyUp={getMessage} />
                </div >
                <div className="divitem"> 
                    <MicIcon />
                 </div>
                <button className="divitem" onClick={()=> renderChat()}>
                    <SendIcon />
                  </button>
            </div>
        </div>
    );
};

export default ChatRoom;