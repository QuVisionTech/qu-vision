import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

type ConsentState = "pending" | "accepted" | "denied" | "custom";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      setVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ state: "accepted", preferences: { necessary: true, analytics: true, marketing: true } }));
    setVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ state: "denied", preferences: { necessary: true, analytics: false, marketing: false } }));
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ state: "custom", preferences }));
    setVisible(false);
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4"
        >
          <div className="container max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl shadow-2xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-secondary flex-shrink-0" />
                  <h3 className="font-display font-bold text-primary text-lg">Cookie Notice</h3>
                </div>
                <button onClick={handleDeny} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!showPreferences ? (
                <>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                    <a href="/cookie-notice" className="text-secondary underline hover:text-secondary/80">Cookie Notice</a> and{" "}
                    <a href="/privacy" className="text-secondary underline hover:text-secondary/80">Privacy Statement</a> for more information.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="hero" size="sm" onClick={handleAccept}>Accept All</Button>
                    <Button variant="outline" size="sm" onClick={handleDeny}>Deny All</Button>
                    <Button variant="ghost" size="sm" onClick={() => setShowPreferences(true)} className="text-secondary">
                      Cookie Preferences
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    <label className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <span className="text-sm font-semibold text-foreground">Necessary Cookies</span>
                        <p className="text-xs text-muted-foreground">Required for the website to function properly.</p>
                      </div>
                      <input type="checkbox" checked disabled className="accent-secondary w-4 h-4" />
                    </label>
                    <label className="flex items-center justify-between p-3 rounded-lg bg-muted/50 cursor-pointer">
                      <div>
                        <span className="text-sm font-semibold text-foreground">Analytics Cookies</span>
                        <p className="text-xs text-muted-foreground">Help us understand how visitors interact with our website.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="accent-secondary w-4 h-4"
                      />
                    </label>
                    <label className="flex items-center justify-between p-3 rounded-lg bg-muted/50 cursor-pointer">
                      <div>
                        <span className="text-sm font-semibold text-foreground">Marketing Cookies</span>
                        <p className="text-xs text-muted-foreground">Used to deliver personalized advertisements.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="accent-secondary w-4 h-4"
                      />
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="hero" size="sm" onClick={handleSavePreferences}>Save Preferences</Button>
                    <Button variant="ghost" size="sm" onClick={() => setShowPreferences(false)}>Back</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
