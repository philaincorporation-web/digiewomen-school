"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, X, Bell, Monitor, Smartphone, Check } from "lucide-react";
import { requestNotificationPermission, getNotificationPermission, sendLocalNotification } from "@/lib/notifications";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [notifPermission, setNotifPermission] = useState<string>("default");
  const [notifSuccess, setNotifSuccess] = useState(false);

  useEffect(() => {
    // Vérifier si l'app est déjà installée en mode Standalone
    const isStandaloneApp =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    setIsStandalone(isStandaloneApp);

    // Détecter iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIPhoneOrIPad = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIPhoneOrIPad);

    // Vérifier permission notification
    setNotifPermission(getNotificationPermission());

    // Écouter l'événement d'installation PWA (Chrome, Edge, Android, Desktop)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Ne pas afficher si l'utilisateur l'a fermé récemment
      const dismissedTime = localStorage.getItem("pwa_prompt_dismissed");
      if (!dismissedTime || Date.now() - parseInt(dismissedTime, 10) > 24 * 60 * 60 * 1000) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      console.log("[PWA] User accepted the install prompt");
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa_prompt_dismissed", Date.now().toString());
  };

  const handleNotificationEnable = async () => {
    const permission = await requestNotificationPermission();
    setNotifPermission(permission);
    if (permission === "granted") {
      setNotifSuccess(true);
      sendLocalNotification("Notifications DigieWomen School activées ! 🔔", {
        body: "Vous recevrez désormais les actualités et rappels de formation.",
      });
      setTimeout(() => setNotifSuccess(false), 4000);
    }
  };

  if (isStandalone || !showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[90] p-4 sm:p-5 bg-white dark:bg-digie-dark-card rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-slide-up backdrop-blur-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-digie-dark p-1.5 overflow-hidden shadow-md shrink-0 border border-gray-100 dark:border-gray-800 flex items-center justify-center">
            <Image
              src="/logoremovebg.png"
              alt="DigieWomen School"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
              DigieWomen School
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              Installez l&apos;application pour un accès rapide &amp; hors ligne
            </p>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-gray-600 dark:text-gray-300">
        <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md">
          <Smartphone className="w-3 h-3 text-digie-green" /> Mobile
        </span>
        <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md">
          <Monitor className="w-3 h-3 text-digie-green" /> Desktop
        </span>
        <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md">
          📡 Hors ligne
        </span>
      </div>

      {isIOS ? (
        <div className="mt-3 p-2.5 rounded-lg bg-digie-green/10 text-xs text-gray-700 dark:text-gray-200">
          Pour installer sur iOS : appuyez sur le bouton <strong>Partager</strong> puis <strong>&quot;Sur l&apos;écran d&apos;accueil&quot;</strong> 📲
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-2">
          {deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-digie-green px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-digie-green-dark active:scale-95 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Installer l&apos;App
            </button>
          )}

          {notifPermission !== "granted" && (
            <button
              onClick={handleNotificationEnable}
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-digie-dark px-3 py-2.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              title="Activer les notifications"
            >
              {notifSuccess ? <Check className="w-4 h-4 text-green-500" /> : <Bell className="w-4 h-4 text-digie-green" />}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
