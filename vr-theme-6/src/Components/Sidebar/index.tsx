import Nav from "react-bootstrap/Nav";
import {
  dashboardIcon,
  maintenanceIcon,
  offerIcon,
  salesIcon,
  settingsIcon,
  userIcon,
} from "../../assets/images";

const Sidebar: React.FC = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/dashboard" title="Dashboard" className="active">
          <img src={dashboardIcon} alt="Dashboard" />
          <span>Dashboard</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/innerpage" title="User">
          <img src={userIcon} alt="User" />
          <span>User</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" title="Maintenance">
          <img src={maintenanceIcon} alt="Maintenance" />
          <span>Maintenance</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" title="Offers">
          <img src={offerIcon} alt="Offers" />
          <span>Offers</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" title="Sales">
          <img src={salesIcon} alt="Sales" />
          <span>Sales</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" title="Settings">
          <img src={settingsIcon} alt="Settings" />
          <span>Settings</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Sidebar;
