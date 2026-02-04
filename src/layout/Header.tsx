import { branding } from "../config/branding";

export function Header() {
  return (
    <header className="h-14 flex items-center px-6 border-b">
      <img
        src={branding.logo.light}
        alt={branding.productName}
        className="h-8"
      />
    </header>
  );
}
