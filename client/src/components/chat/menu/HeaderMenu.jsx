import { MoreVert } from '@mui/icons-material'; // ✅ Fixed import
import { Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react';

const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px
  color: #4a4a4a`;

  return (
    <>
      <MoreVert onClick={handleClick} style={{ cursor: 'pointer' }} />
      <Menu
        id="basic-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
