import NavBar from "../NavBar/NavBar";
import "./navbar.css";

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-shell">
      {/* Top Navigation */}
      <NavBar />

      {/* Main application area */}
      <div className="app-body">
        <main className="app-content">
          {children ?? <p>Welcome to the app</p>}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
