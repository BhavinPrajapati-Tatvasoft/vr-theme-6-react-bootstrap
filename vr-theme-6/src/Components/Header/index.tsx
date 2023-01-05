import Button from "react-bootstrap/esm/Button";
import {
  hamburgerIcon,
  LogoBlack,
  mobileLogo,
  messageIcon,
  searchIcon,
  notificationIcon,
  adminUser,
  profileDownArrowIcon,
} from "../../assets/images";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <div
        className="overlay"
        onClick={(e) =>
          document.body.classList.remove("open-sidebar", "show-searchbar")
        }
      ></div>
      <header className="header">
        <button
          className="primary-icon-button btn toggle-button"
          onClick={(e) => document.body.classList.toggle("open-sidebar")}
        >
          <img src={hamburgerIcon} alt="Hamburger" />
        </button>
        <a href="#" title="Company" className="logo">
          <img src={LogoBlack} alt="Company" className="d-none d-lg-block" />
          <img src={mobileLogo} alt="Company" className="d-block d-lg-none" />
        </a>
        <div className="right-content">
          <div className="search-wrapper">
            <div>
              <Form.Control type="text" placeholder="Search" />
              <button className="btn">
                <img src={searchIcon} alt="Hamburger" />
              </button>
            </div>
          </div>
          <button
            className="primary-icon-button btn d-inline-block d-lg-none search-toggle"
            onClick={(e) => document.body.classList.toggle("show-searchbar")}
          >
            <img src={searchIcon} alt="Hamburger" />
          </button>
          <button className="primary-icon-button btn">
            <img src={messageIcon} alt="Hamburger" />
          </button>
          <button className="primary-icon-button btn">
            <img src={notificationIcon} alt="Hamburger" />
          </button>
          <Dropdown className="user-profile">
            <Dropdown.Toggle>
              <img src={adminUser} alt="User" />
              <span className="d-none d-lg-block">Jhon Doe</span>
              <img
                className="d-none d-lg-block"
                src={profileDownArrowIcon}
                alt="Down Arrow"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#" title="Pofile">
                Pofile
              </Dropdown.Item>
              <Dropdown.Item href="#" title="My Account">
                My Account
              </Dropdown.Item>
              <NavLink to="/login" title="Logout" className="dropdown-item">
                Logout
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
    </>
  );
};
export default Header;
