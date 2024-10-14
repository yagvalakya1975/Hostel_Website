import logo from "../Assets/logo.png";
import hamburger from "../Assets/hamburger.svg";
import cross from "../Assets/cross.svg";
import "../Styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-outer-wrapper">
        <div className="navbar-inner-wrapper">
          <img src={logo} alt="" onClick={() => {
                navigate("/", { replace: true });
              }}/>
        </div>
        <div className="navbar-inner-wrapper" id="navbar-hor">
          <ul style={{ color: "#1F1F1F", listStyle: "none", display: "flex" }}>
            <li
              onClick={() => {
                navigate("/services", { replace: true });
              }}
            >
              SERVICES
            </li>
            <li
              onClick={() => {
                navigate("/council", { replace: true });
              }}
            >
              COUNCIL
            </li>
            <li
              onClick={() => {
                navigate("/events", { replace: true });
              }}
            >
              EVENTS
            </li>
            <li
              onClick={() => {
                navigate("/complaints", { replace: true });
              }}
            >
              COMPLAINT PORTAL
            </li>
          </ul>
        </div>
        <div
          className="navbar-hamburger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={open ? cross : hamburger} alt="" />
        </div>
      </div>
      {open && (
        <div
          style={{
            width: "calc(100vw - 17px)",
            height: `calc(100vh + 50px)`,
            marginTop: "-50px",
            backgroundColor: "#FDF3EE",
            position: "fixed",
            zIndex: 200,
          }}
        >
          <div
            style={{
              marginTop: "100px",
              textAlign: "right",
              marginRight: "16px",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            <ul
              className="hamburger-ul"
              style={{
                color: "#1F1F1F",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li
                onClick={() => {
                  navigate("/services", { replace: true });
                  setOpen(false);
                }}
              >
                SERVICES
              </li>
              <li
                onClick={() => {
                  navigate("/council", { replace: true });
                  setOpen(false);
                }}
              >
                COUNCIL
              </li>
              <li
                onClick={() => {
                  navigate("/events", { replace: true });
                  setOpen(false);
                }}
              >
                EVENTS
              </li>
              <li
                onClick={() => {
                  navigate("/complaints", { replace: true });
                  setOpen(false);
                }}
              >
                COMPLAINT PORTAL
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
