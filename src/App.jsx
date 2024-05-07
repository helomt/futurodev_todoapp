import { AuthProvider } from "./context/auth-context";
import { LogIn } from "./pages/login";

function App() {
  return <>
  <AuthProvider><LogIn></LogIn></AuthProvider>
  
  </>;
}

export default App;
