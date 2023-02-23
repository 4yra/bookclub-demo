import * as React from 'react';
import { useState } from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';

export const HeaderNav = ({children}) => {
    const headerChildren = {
        maxWidth:'800px', 
        width: '90%', 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'space-between', 
        margin:'0 auto'
    }
    return(
        <nav className="header-nav">
           <div style={headerChildren}>
                {children}
           </div> 
        </nav>
    );
}



export const MobileNav = (props) => {
    // const [profile, setProfile] = useState(false)
    // const [book, setBook] = useState(false)
    // const [club, setClub] = useState(false)
    const [value, setValue] = useState('recents');
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <BottomNavigation sx={{ width: '100vw', position: 'fixed', bottom:'0', height:'45px', boxShadow: '0px -10px 50px rgba(0, 0, 0, 0.2)'}} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Profile"
                value="profile"
                icon={<AccountCircleIcon />}
                onClick={() => {props.profile(true)}}
            />

            <BottomNavigationAction
                label="Book"
                value="book"
                icon={<LocalLibraryRoundedIcon />}
            />
            <BottomNavigationAction
                label="Club"
                value="club"
                icon={<WorkspacesIcon />}
            />
        </BottomNavigation>
    );
}