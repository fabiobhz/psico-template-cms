import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_KEY = "vinculo_cookie_consent";

type ConsentValue = "granted" | "denied";

const updateGtagConsent = (value: ConsentValue) => {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage:         value,
      ad_user_data:       value,
      ad_personalization: value,
      analytics_storage:  value,
    });
  }
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    if (saved === "granted") updateGtagConsent("granted");
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateGtagConsent("granted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateGtagConsent("denied");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg"
        >
          <div className="container py-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <p className="text-body text-xs text-muted-foreground text-center sm:text-left leading-relaxed max-w-2xl">
              Utilizamos cookies para melhorar a sua experiência e exibir anúncios relevantes.
              Ao aceitar, concorda com o uso de cookies de publicidade conforme a nossa{" "}
              <Link
                to="/politica-de-privacidade"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                política de privacidade
              </Link>
              .{" "}
              <span className="text-foreground/60">
                (Este aviso aplica-se a utilizadores no Espaço Económico Europeu.)
              </span>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-5 py-2 rounded-md text-xs font-body tracking-wider border border-border text-muted-foreground hover:bg-secondary transition-colors duration-200"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 rounded-md text-xs font-body tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                Aceitar cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
