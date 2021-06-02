import React from 'react';

import './ListItem.css';

const ListItem = ({name , date , message , avtar}) => {

  

    return (
        <div > 
           <div className="item-Container">
              
              <div className="avtar-div">
                   <img src={`${avtar}`} className="avtar" alt=""/>
              </div> 
              <div className="avtardetail">
                 <p>{name} <br/>{message}<br/>{date}</p> 
                     
              </div >
            </div> 
   
        </div>
    );
};

export default ListItem;
