import { Box, Typography } from '@mui/material';
const Conversation = ({ user }) => {
  return (
    <Box>
      <Box>
        <img src={user.picture} alt="dp"></img>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Conversation;
