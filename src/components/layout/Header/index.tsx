import { useState, useEffect } from "react";
import { TopBar } from "./TopBar";
import { NavBar } from "./NavBar";
import { MobileDrawer } from "./MobileDrawer";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
        style={{
          background: scrolled ? "linear-gradient(180deg, #1B5871 0%, #104F68 100%)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="hidden lg:block">
          <TopBar />
        </div>
        <NavBar onCallClick={() => setIsCallModalOpen(true)} onMenuClick={() => setIsMobileMenuOpen(true)} />
      </header>

      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} onCallClick={() => setIsCallModalOpen(true)} />

      {isCallModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={() => setIsCallModalOpen(false)}>
          <div className="bg-ui-block p-8 rounded-2xl text-text-white">Модальное окно — скоро</div>
        </div>
      )}
    </>
  );
};
