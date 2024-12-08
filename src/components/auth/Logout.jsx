import LogoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/LoginPage");
  }

  return (
    <button className="icon-btn" onClick={handleLogout}>
        <img src={LogoutIcon} alt="Logout" />
    </button>
  )
}

export default Logout