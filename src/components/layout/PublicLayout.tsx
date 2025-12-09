import { ReactNode } from "react";
import PublicNavbar from "./PublicNavbar";
import Footer from "./Footer";

interface PublicLayoutProps {
  children: ReactNode;
  isLoggedIn?: boolean;
}

const PublicLayout = ({ children, isLoggedIn = false }: PublicLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar isLoggedIn={isLoggedIn} />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
