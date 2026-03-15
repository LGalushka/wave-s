import { useState } from "react";
import { TopBar } from "./TopBar";
import { NavBar } from "./NavBar";
import { MobileDrawer } from "./MobileDrawer";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          background: "linear-gradient(180deg, #1B5871 100%, #104F68 0%)",
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
