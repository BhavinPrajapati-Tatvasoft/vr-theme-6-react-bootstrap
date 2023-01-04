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

const Header: React.FC = () => {
  return (
    <header className="header">
      <button className="primary-icon-button btn toggle-button">
        <img src={hamburgerIcon} alt="Hamburger" />
      </button>
      <a href="#" title="Company" className="logo">
        <img src={LogoBlack} alt="Company" className="d-none d-lg-block" />
        <img src={mobileLogo} alt="Company" className="d-block d-lg-none" />
      </a>
      <div className="right-content">
        <div className="search-wrapper">
          <Form.Control type="text" placeholder="Search" />
          <button className="btn">
            <img src={searchIcon} alt="Hamburger" />
          </button>
        </div>
        <button className="primary-icon-button btn">
          <img src={messageIcon} alt="Hamburger" />
        </button>
        <button className="primary-icon-button btn">
          <img src={notificationIcon} alt="Hamburger" />
        </button>
        <Dropdown className="user-profile">
          <Dropdown.Toggle>
            <img src={adminUser} alt="User" />
            <span>Jhon Doe</span>
            <img src={profileDownArrowIcon} alt="Down Arrow" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};
export default Header;
