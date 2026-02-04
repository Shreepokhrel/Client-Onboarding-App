import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <label className="toggle-button">
        ☰{" "}
        <input
          type="checkbox"
          checked={collapsed}
          onChange={() => setCollapsed(!collapsed)}
        />
      </label>
      {/* Top items */}
      <ul className="items top-items">
        <li>
          <Link to="/overview">
            🏠 <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link to="/roadmap">
            🗺️ <span>Roadmap</span>
          </Link>
        </li>
        <li>
          <Link to="/modules">
            📦 <span>Modules</span>
          </Link>
        </li>
        <li>
          <Link to="/updates">
            📊 <span>Updates</span>
          </Link>
        </li>
        <li>
          <Link to="/knowledgebase">
            📚 <span>Knowledge Base</span>
          </Link>
        </li>
      </ul>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Bottom items */}
      <ul className="items bottom-items">
        <li>
          <Link to="/Users">
            👥 <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to="/security">
            🔒 <span>Security</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            ⚙️ <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
