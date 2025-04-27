import { Search as SearchIcon } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  padding: 8px 0; 
`;

const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  margin: 10px 13px;
  width: 100%;
  border-radius: 10px;
  display: flex;                      /* ✅ Added flex */
  align-items: center;                /* ✅ Center icon and input */
`;

const Icon = styled(Box)`
  padding: 6px 10px;
  color: #919191;
  display: flex;
  align-items: center;                /* ✅ Center icon vertically */
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 10px 10px 10px 0px;        /* ✅ Adjusted padding */
  background-color: transparent;      /* ✅ Transparent to match wrapper */
  border: none;
  outline: none;
`;

const Search = () => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small" />
        </Icon>
        <InputField placeholder="Search or start a new chat" />
      </Wrapper>
    </Component>
  );
};

export default Search;
