import { useEffect } from "react";
import { applyTheme } from "./theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyTheme();
  }, []);

  return <>{children}</>;
}
