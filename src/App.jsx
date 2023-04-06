import { NavLink } from "react-router-dom";
import AppRouter from "./AppRouter";
import { useState } from "react";

import "./App.css";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="App">
            
            <AppRouter loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "350px",
                    margin: "auto",
                }}
            >
                <NavLink to="/">
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>Home</p>
                        ) : (
                            <p style={{ color: "black" }}>Home</p>
                        )
                    }
                </NavLink>
                <NavLink to="/about">
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>About</p>
                        ) : (
                            <p style={{ color: "black" }}>About</p>
                        )
                    }
                </NavLink>
                <NavLink to="/contact">
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>Contact</p>
                        ) : (
                            <p style={{ color: "black" }}>Contact</p>
                        )
                    }
                </NavLink>
                <NavLink to="/profile/249">
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>Profile</p>
                        ) : (
                            <p style={{ color: "black" }}>Profile</p>
                        )
                    }
                </NavLink>
                <NavLink to={loggedIn ? "/admin" : "login"}>
                    {({ isActive }) =>
                        isActive ? (
                            <p style={{ color: "blue" }}>Admin</p>
                        ) : (
                            <p style={{ color: "black" }}>Admin</p>
                        )
                    }
                </NavLink>
            </div>
        </div>
    );
}

export default App;
