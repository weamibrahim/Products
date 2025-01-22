import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { useLogin } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { setIsLogin, IsLogin } = useLogin();

  
  console.log(IsLogin);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
   
    setIsLogin(false);
    navigate("/login");
  };
  return (
    <div>
         <div style={{ height: "10px", width: "100%", backgroundColor: "rgb(97, 116, 240)" }}></div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
       
          <div className="d-flex align-items-center">
          <GiClothes  className="fs-3"/>
            <span className="fs-3 mx-2" style={{ fontFamily: "Sofia" }}>
              <NavLink to="/" className="text-decoration-none text-dark">
                clothes
              </NavLink>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav  ms-auto mb-2 mb-lg-0 fs-4"
              style={{ fontFamily: "Sofia" }}
            >
              {IsLogin ? (
                 <li className="nav-item ms-lg-auto">
                 <button
                   className="nav-link d-flex align-items-center"
                   onClick={handleLogout}
                 >
                   <IoIosLogOut className="fs-4 me-2" />
                   Logout
                 </button>
               </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link mx-2">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link mx-2">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
