import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { ContactForm } from "@/components/shared/ContactForm";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #1B5871 0%, #104F68 100%)" }}>
      <Header />
      <main className="pt-30">
        <Outlet />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
};
