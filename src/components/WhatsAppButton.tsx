"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const href = `https://whatsapp.com/channel/0029VaufFo67T8bY1a1drU15`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20BD5A] transition-colors group"
      aria-label="Contacter via WhatsApp"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
        scale: { duration: 0.2 },
      }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium text-sm">WhatsApp</span>
    </motion.a>
  );
}
