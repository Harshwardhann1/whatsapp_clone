import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
import { AccountContext } from '../../../context/AccountProvider';
import { useContext } from 'react';

const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  width: 100%;
  align-items: center;
`;

const Image = styled('img')({
  height: 40,
  width: 40,
  objectFit: 'cover',
  borderRadius: '50%',
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-right: 45px;
  gap: 12px;
`;

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);
  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? 'Online'
            : 'Offline'}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
