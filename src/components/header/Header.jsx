import "./Header.css";
import logo from "../assets/global-news3.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { logoutUser } from "../../firebase/auth";


function Header() {

    const navigate = useNavigate();
    const { user } = useAuth();

    const handleLogout = async () => {
        await logoutUser();
        navigate("/login");
    }

    return (
        <div className="header-container">
            <div className="header-components">

                <img onClick={() => navigate("/")} src={logo} alt="logo" />

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>

                    {user && (
                        <span style={{ color: "white", fontWeight: "bold", fontFamily: "arial" }}>
                            {user.displayName}
                        </span>
                    )}

                    {user ? (
                        <button onClick={handleLogout}>
                            Sign Out
                        </button>
                    ) : (
                        <button onClick={() => navigate("/login")}>
                            Login
                        </button>
                    )}

                </div>

            </div>
        </div>
    );
}

export default Header