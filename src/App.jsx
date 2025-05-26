import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <LoginPage />
      </Auth0Provider>
    </>
  );
}

export default App;
