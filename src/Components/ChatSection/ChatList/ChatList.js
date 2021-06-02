import React , { useEffect, useState }  from 'react';
import './ChatList.css'
import Data from './jsonData';
import ListItem from './ListItem.js';

const ChatList = () => {

    const [data , setData] = useState();
     
 
    useEffect(()=>{
       const filterdata = Data[0].data.conversations.filter((user)=> (user.chats.length > 0));
       setData(filterdata);
    },[]);
    // console.log(Data[0].data.conversations);
     console.log(data);

    return (
        <div className="chatlist">
           <div>
               {data && data.map(( d , index) => {
                   return  <ListItem key={index}
                          name={d.user.firstName} 
                          avtar={d.user.profilePic} 
                          message={d.chats[0].message} 
                          date={d.chats[0].createdAt}/>
               })} 
              
               
            </div>
        </div>
    );
};

export default ChatList;





