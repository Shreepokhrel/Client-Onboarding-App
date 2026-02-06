import { ThemeProvider } from "./theme/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import KnowledgeBase from "./pages/KnowledgeBase";
import Modules from "./pages/Modules";
import Overview from "./pages/Overview";
import Roadmap from "./pages/Roadmap";
import Security from "./pages/Security";
import Settings from "./pages/Settings";
import Updates from "./pages/Updates";
import Users from "./pages/Users";
import LogOut from "./pages/LogOut";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* <NavBar /> */}
        <div className="main">
          <Sidebar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/knowledge-base" element={<KnowledgeBase />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/security" element={<Security />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/users" element={<Users />} />
              <Route path="/logout" element={<LogOut />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
