import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
  dashboardIcon,
  maintenanceIcon,
  offerIcon,
  salesIcon,
  settingsIcon,
  userIcon,
} from "../../assets/images";
import gsap from "gsap";
import React from "react";

const { useLayoutEffect } = React;
const Sidebar: React.FC = () => {
  function closeSidebar() {
    document.body.classList.remove("open-sidebar");
  }
  //GSAP Animation
  useLayoutEffect(() => {
    gsap.fromTo(
      ".sidebar .nav-item a",
      {
        opacity: 0,
        x: -40,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <Nav className="sidebar">
      <Nav.Item>
        <NavLink
          to="/dashboard"
          title="Dashboard"
          className="nav-link"
          onClick={closeSidebar}
        >
          <img src={dashboardIcon} alt="Dashboard" />
          <span>Dashboard</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/innerpage"
          title="User"
          className="nav-link"
          onClick={closeSidebar}
        >
          <img src={userIcon} alt="User" />
          <span>User</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/"
          title="Maintenance"
          className="nav-link"
          onClick={closeSidebar}
        >
          <img src={maintenanceIcon} alt="Maintenance" />
          <span>Maintenance</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/"
          title="Offers"
          className="nav-link"
          onClick={closeSidebar}
        >
          <img src={offerIcon} alt="Offers" />
          <span>Offers</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/"
          title="Sales"
          className="nav-link"
          onClick={closeSidebar}
        >
          <img src={salesIcon} alt="Sales" />
          <span>Sales</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/"
          title="Settings"
          className="nav-link"
          onClick={closeSidebar}
        >
          <img src={settingsIcon} alt="Settings" />
          <span>Settings</span>
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};
export default Sidebar;
