import { IconButton } from '@mui/material';
import {
    Notifications as NotificationsIcon,
    AccountCircle as ProfileIcon,
    Message as MessageIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';
import logo from './../../Assets/Images/logo-fusion.png';

const Navbar = () => {
    return (
        <div className="bg-white text-primary p-4 flex items-center justify-between shadow-md">
            {/* Left: Site logo */}
            <img src={logo} alt="Fusion Learn Logo" className="h-14" />

            {/* Right: Icons for actions */}
            <div className="flex items-center space-x-4">
                <IconButton>
                    <MessageIcon className="text-primary" />
                </IconButton>
                <IconButton>
                    <NotificationsIcon className="text-primary" />
                </IconButton>
                <IconButton>
                    <ProfileIcon className="text-primary" />
                </IconButton>
                <IconButton>
                    <LogoutIcon className="text-primary" />
                </IconButton>
            </div>
        </div>
    );
};

export default Navbar;
