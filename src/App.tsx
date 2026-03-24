import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { SiteConfigProvider } from "./contexts/SiteConfigContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieConsent from "./components/CookieConsent";
import { AdminPanel } from "./admin/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <SiteConfigProvider>
        <Toaster
          toastOptions={{
            classNames: {
              toast:
                "group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-border",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/obrigado" element={<ThankYou />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </SiteConfigProvider>
    </BrowserRouter>
  );
}

export default App;
