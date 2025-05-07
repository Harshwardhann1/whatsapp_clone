import { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);

  const socket = useRef();

  // Establish the socket connection
  useEffect(() => {
    socket.current = io('ws://localhost:9000');

    // Listen for getUsers event to update active users
    socket.current.on('getUsers', (users) => {
      console.log('Active users:', users);
      setActiveUsers(users);
    });

  }, []);

  // Emit addUsers event when account is set
  useEffect(() => {
    if (account) {
      console.log('Emitting addUsers event with:', account);
      socket.current.emit('addUsers', account);
    }
  }, [account]);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
