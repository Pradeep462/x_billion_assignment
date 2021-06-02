import React from 'react';
import './SideBar.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupWorkTwoToneIcon from '@material-ui/icons/GroupWorkTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import PermContactCalendarTwoToneIcon from '@material-ui/icons/PermContactCalendarTwoTone';
import FilterTiltShiftTwoToneIcon from '@material-ui/icons/FilterTiltShiftTwoTone';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';




const SideBar = () => {
    return (
        <div className="sidebar">
          <div className="container"> 
             <DashboardIcon />
            <GroupWorkTwoToneIcon />
            <GroupTwoToneIcon />
          
            <EmailTwoToneIcon />
            <PermContactCalendarTwoToneIcon />
            <FilterTiltShiftTwoToneIcon />
            <FeedbackIcon />
            <ExitToAppTwoToneIcon />
            
        </div>
            
        </div>
    );
};

export default SideBar;