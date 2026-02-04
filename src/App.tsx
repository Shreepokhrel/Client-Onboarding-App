import { ThemeProvider } from "./theme/ThemeProvider";
// import { Header } from "./layout/Header";
import NavBar from "./NavBar/NavBar";

export default function App() {
  return (
    <ThemeProvider>
      <NavBar />
      {/* <Header /> */}
      {/* <main style={{ padding: "16px" }}>
        <button className="primary-btn">Primary Button</button>
      </main> */}
    </ThemeProvider>
  );
}
