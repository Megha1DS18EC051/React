import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = (props) => {
    return (
        <div className="header">
            <div className='header-left'>
                <img src="https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021.png" alt="logo"/>
                <div className='header-search'>
                    <SearchIcon/>
                    <input type="text" placeholder='Search facebook'/>
                </div>

            </div>
        <div className='header-middle'>
            <div className='header-option'>
                <HomeIcon fontSize='large'/>

            </div>
            <div className='header-option'>
                <OndemandVideoIcon fontSize='large'/>

            </div>
            <div className='header-option'>
                <GroupsIcon fontSize='large'/>

            </div>
            <div className='header-option'>
                <SportsEsportsIcon fontSize='large'/>

            </div>

        </div>
        <div className='header-right'>
            <div className='header-info'>
                <Avatar/>
                <h5>Megha</h5>
            </div>
            <IconButton>
                <AppsIcon/>
                
            </IconButton>
            <IconButton>
                <ForumIcon/>
                
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
                
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon/>
                
            </IconButton>


        </div>
            
        </div>
    )
}

export default Header
