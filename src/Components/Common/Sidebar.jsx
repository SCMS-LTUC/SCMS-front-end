import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
} from '@mui/material';
import {
    LibraryBooks as CoursesIcon,
    Announcement as AnnouncementsIcon,
    Search as DiscoverIcon,
    Event as ScheduleIcon,
    Menu as MenuIcon,
    Close as CloseIcon,
} from '@mui/icons-material';

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { text: 'My Courses', icon: <CoursesIcon />, path: '/' },
        { text: 'Announcements', icon: <AnnouncementsIcon />, path: '/announcements' },
        { text: 'Discover', icon: <DiscoverIcon />, path: '/discover' },
        { text: 'Schedule', icon: <ScheduleIcon />, path: '/schedule' },
    ];

    const toggleSidebar = () => setIsOpen((prev) => !prev);

    return (
        <div
            className={`h-screen bg-white shadow-md transition-all duration-300 
            ${isOpen ? 'w-64' : 'w-16'}`}
        >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4">
                {isOpen && <h1 className="text-xl font-bold pt-3">Admin Panel</h1>}
                <IconButton
                    onClick={toggleSidebar}
                    style={{ margin: "0", paddingLeft: "13px", paddingTop: "20px", width: '20px', height: '20px' }}
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </div>

            {/* Menu List */}
            <List>
                {menuItems.map((item) => (
                    <Link
                        key={item.text}
                        to={item.path}
                        className="no-underline text-inherit"
                    >
                        <ListItem disablePadding>
                            <ListItemButton
                                className={`hover:bg-blue-100 transition-colors duration-300 ${location.pathname === item.path ? 'bg-blue-200' : ''}`}
                            >
                                <ListItemIcon className="text-gray-700">
                                    {item.icon}
                                </ListItemIcon>
                                {isOpen && <ListItemText primary={item.text} />}
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
};

export default Sidebar;
