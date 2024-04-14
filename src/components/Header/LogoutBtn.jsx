import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate("/login");

        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
