/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { SiteConfigProvider } from "./contexts/SiteConfigContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieConsent from "./components/CookieConsent";
import DynamicMeta from "./components/DynamicMeta";
import { AdminPanel } from "./admin/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <SiteConfigProvider>
        <DynamicMeta />
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
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </SiteConfigProvider>
    </BrowserRouter>
  );
}

export default App;
