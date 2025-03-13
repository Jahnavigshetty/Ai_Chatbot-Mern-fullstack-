import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* <GoogleOAuthProvider clientId={process.env.VITE_GOOGLE_CLIENT_ID}>
      <GoogleLogin redirectUri="http://localhost:5173/callback" />
    </GoogleOAuthProvider> */}
  </BrowserRouter>
);
