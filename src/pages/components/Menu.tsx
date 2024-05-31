import { useNavigate } from "react-router-dom"

export default function MenuList(){
    const navigate = useNavigate();
    return ( 
    <div className="footer">
        <div className="footer__grid">
            <button type="button" onClick={() => navigate("/")}>Home</button>
            <button type="button" onClick={() => navigate("/profile")}>Profile</button>
            <button type="button" onClick={() => navigate("/")}>Logout</button>
        </div>
    </div>
    )
}