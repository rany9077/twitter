import { BsHouse } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout, MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "firebaseApp";

export default function MenuList(){
    const {user} = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate();
    return ( 
    <div className="footer">
        <div className="footer__grid">
            <button type="button" onClick={() => navigate("/")}>
                <BsHouse />
                Home
            </button>
            <button type="button" onClick={() => navigate("/profile")}>
                <FaRegUserCircle />
                Profile
            </button>
            {user === null ? (
                <button type="button" onClick={() => navigate("/users/login")}>
                    <MdLogin />
                    Login
                </button>
            ) : (
                <button type="button" onClick={ async () => {
                    const auth = getAuth(app);
                    await signOut(auth);
                    toast.success('로그아웃 되었습니다.')
                }}>
                    <MdOutlineLogout />
                    Logout
                </button>
            )}
        </div>
    </div>
    )
}