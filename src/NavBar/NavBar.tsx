import { useState, useRef, useEffect } from "react";
import "./navbar.css";
import { branding } from "../config/branding";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("authenticated_user");
    localStorage.removeItem("auth_timestamp");
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <img src={branding.logo.light} alt="logo" className="navbar-logo" />
        <span className="navbar-title">Client Onboarding App</span>
      </div>

      {/* RIGHT */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <input type="search" placeholder="Search…" className="navbar-search" />

        <button className="icon-button" aria-label="Notifications">
          🔔
        </button>

        <div className="profile" ref={profileRef}>
          <button
            className="profile-button"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            👤
          </button>

          {profileOpen && (
            <div className="profile-menu">
              <button className="profile-item">Profile</button>
              <button className="profile-item">Settings</button>
              <button className="profile-item logout" onClick={handleLogout}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Toggle */}
      <button
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default NavBar;
