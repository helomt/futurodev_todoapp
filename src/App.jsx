import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { routes } from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
}

export default App;
