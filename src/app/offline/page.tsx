"use client";

import Link from "next/link";
import { WifiOff, RefreshCw, Home } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-digie-green/10 dark:bg-digie-green/20 flex items-center justify-center mb-6 animate-pulse">
        <WifiOff className="w-10 h-10 text-digie-green" />
      </div>

      <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-4">
        Mode Hors Connexion
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Vous êtes hors ligne
      </h1>

      <p className="max-w-md text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
        Il semble que vous n&apos;ayez pas de connexion Internet active pour le moment.
        Vos pages précédemment consultées restent accessibles.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 rounded-full bg-digie-green px-6 py-3 font-semibold text-white transition hover:bg-digie-green-dark active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          Réessayer la connexion
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-digie-dark-card px-6 py-3 font-semibold text-gray-800 dark:text-white transition hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <Home className="w-4 h-4" />
          Accueil
        </Link>
      </div>
    </div>
  );
}
