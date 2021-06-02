import React from 'react';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div className="header">
           
          <div className="itemContainer">
            <MenuIcon className="menuIcon"/>
          
             <div className="text"> 
                  <h3 >XBSL</h3>
            </div> 
                
            </div>  
            <NotificationsIcon className="notificationIcon"/>
       </div>
    );
};

export default Header;