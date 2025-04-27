import Messenger from "./components/Messenger"
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
const clientId = '643417418448-ogp0u8hpl7ickd03uihnni6aotapq88b.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger/>
    </GoogleOAuthProvider>
  )
}

export default App
