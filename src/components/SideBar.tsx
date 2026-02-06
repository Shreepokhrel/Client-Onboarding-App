import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./sidebar.css";
import Profile from "../assets/penn.webp";
import { branding } from "../config/branding";

// import {
//   Home,
//   Map,
//   Boxes,
//   BarChart3,
//   BookOpen,
//   Users,
//   Shield,
//   Settings,
// } from "lucide-react";
import {
  HiHome,
  HiChartPie,
  HiChartBar,
  HiCollection,
  HiBookOpen,
  HiUser,
  HiShieldCheck,
  HiServer,
  HiLogout,
} from "react-icons/hi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    // <div className="companyName">
    //   <h4>{branding.companyName}</h4>
    // </div>

    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <label className="toggle-button">
        ☰{" "}
        {/* <img
          src={branding.logo.light}
          alt="Toggle sidebar"
          className="toggle-logo"
        /> */}
        <input
          type="checkbox"
          checked={collapsed}
          onChange={() => setCollapsed(!collapsed)}
        />
      </label>

      {/* Top items */}

      <div className="sidebar-avatar">
        <Link to="/users">
          <Avatar
            alt="Profile Pic"
            src={Profile}
            sx={{ width: 77, height: 77 }}
          />
        </Link>
        <h4>{branding.userName}</h4>
      </div>
      <ul className="items top-items">
        <li>
          <Link to="/overview">
            <HiHome size={18} color="var(--color-side)" />
            <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link to="/roadmap">
            <HiChartBar size={18} color="var(--color-side)" />
            <span>Roadmap</span>
          </Link>
        </li>
        <li>
          <Link to="/modules">
            <HiChartPie size={18} color="var(--color-side)" />
            <span>Modules</span>
          </Link>
        </li>
        <li>
          <Link to="/updates">
            <HiCollection size={18} color="var(--color-side)" />
            <span>Updates</span>
          </Link>
        </li>
        <li>
          <Link to="/knowledge-base">
            <HiBookOpen size={18} color="var(--color-side)" />
            <span>Knowledge Base</span>
          </Link>
        </li>
      </ul>

      <div className="sidebar-spacer"></div>

      {/* Bottom items */}
      <ul className="items bottom-items">
        <li>
          <Link to="/users">
            <HiUser size={18} color="var(--color-side)" />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to="/security">
            <HiShieldCheck size={18} color="var(--color-side)" />
            <span>Security</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <HiServer size={18} color="var(--color-side)" />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <HiLogout size={18} color="var(--color-side)" />
            <span>Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
