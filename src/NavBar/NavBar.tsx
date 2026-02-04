import { useState, useRef, useEffect } from "react";
import logo from "../assets/react.svg";
import "./navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("authenticated_user");
    localStorage.removeItem("auth_timestamp");

    const OfficeAny = (window as any).Office;

    if (OfficeAny?.context?.ui?.displayDialogAsync) {
      OfficeAny.context.ui.displayDialogAsync(
        `${window.location.origin}/.auth/logout?post_logout_redirect_uri=${encodeURIComponent(
          window.location.origin,
        )}`,
        { height: 60, width: 40, displayInIframe: false },
        (result: any) => {
          if (result.status === OfficeAny.AsyncResultStatus.Succeeded) {
            const dialog = result.value;
            setTimeout(() => {
              dialog.close();
              window.location.reload();
            }, 1200);
          } else {
            window.location.href = "/.auth/logout";
          }
        },
      );
    } else {
      window.location.href = "/.auth/logout";
    }
  };

  // Close profile dropdown on outside click
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
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Client Onboarding App</span>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        {/* Search */}
        <input type="search" placeholder="Search…" className="navbar-search" />

        {/* Notifications */}
        <button className="icon-button" aria-label="Notifications">
          🔔
          <span className="notification-dot" />
        </button>

        {/* Profile */}
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

      {/* Mobile toggle */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
    </header>
  );
};

export default NavBar;
