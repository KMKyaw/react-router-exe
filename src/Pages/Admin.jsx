import React from "react";
import { useNavigate } from "react-router-dom";

function Admin({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate();

    const handleClick = () => {
        setLoggedIn(false);
        navigate("/");
    };

    return (
        <div>
            <img src="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-732x549-thumbnail.jpg" style={{width:"40%"}} alt="" />
            <h1>This is Admin Page</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

export default Admin;
