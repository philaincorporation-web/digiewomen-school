"use client";

import { useState } from "react";
import { Bot, X, Sparkles, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbaseWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* BOUTON FLOTTANT ASSISTANT IA */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-20 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-digie-green to-digie-green-dark text-white px-4 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-white/20"
        aria-label="Ouvrir l'Assistant IA DigieWomen"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={!isOpen ? { y: [0, -4, 0] } : {}}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2.5,
            ease: "easeInOut",
          },
          scale: { duration: 0.2 },
        }}
      >
        <div className="relative">
          <Bot className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
        </div>
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          Assistant IA
        </span>
        <Sparkles className="w-4 h-4 text-emerald-300 hidden sm:inline animate-pulse" />
      </motion.button>

      {/* FENÊTRE CHATBOT POPUP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[82vh] bg-white dark:bg-digie-dark-card rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col backdrop-blur-md"
          >
            {/* EN-TÊTE DU CHATBOT */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-digie-green-dark via-digie-green to-digie-green-light text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <Bot className="w-5 h-5 text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-digie-green-dark"></span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight flex items-center gap-1.5">
                    Assistant IA DigieWomen
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  </h3>
                  <p className="text-[11px] text-white/80 font-medium">
                    En ligne &bull; Posez vos questions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
                  aria-label="Réduire"
                  title="Réduire"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
                  aria-label="Fermer"
                  title="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CONTENU IFRAME CHATBASE */}
            <div className="flex-1 w-full h-full bg-gray-50 dark:bg-gray-900 relative">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/FFZ0jWsdQJ7g-tUvWWfER"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allow="microphone"
                title="Assistant IA DigieWomen"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
