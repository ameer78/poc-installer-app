import { Typography } from '@mui/material';
import './Header.scss';

const Header = (props: any) => {
  return (
    <div
      className="header-container main-bg"
    >
        <Typography variant="h2" color="#fff" className="header-title">
            POC Installer
        </Typography>
    </div>
  );
};

export default Header;
