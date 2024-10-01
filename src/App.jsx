import { AuthProvider } from "@asgardeo/auth-react";
import AppRouter from './router';
import Header from "./components/Header";
import './App.css';

const authConfig = {
    signInRedirectURL: "http://localhost:5173/",
    signOutRedirectURL: "http://localhost:5173/",
    clientID: "h14EPNFXyNu73kfxGTk_bEcgjfUa",
    baseUrl: "https://api.asgardeo.io/t/dana",
    scope: ["openid", "profile"],
};

const App = () => (
    <AuthProvider config={authConfig}>
        <Header />
        <AppRouter />
    </AuthProvider>
);

export default App;
