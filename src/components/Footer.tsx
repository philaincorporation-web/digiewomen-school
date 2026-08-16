"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/content";
import { footerReveal } from "@/lib/animations";

export default function Footer() {
  return (
    <motion.footer
      variants={footerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-digie-blue dark:bg-gray-950 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-110">
                 <Image
                   src="/blanclogo.png"
                   alt="DigieWomen School"
                   width={40}
                   height={40}
                   className="w-full h-full object-contain"
                 />
               </div>
            </div>
            
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/parcours" className="hover:text-digie-green transition-colors duration-200">Notre parcours</Link></li>
              <li><Link href="/formations" className="hover:text-digie-green transition-colors duration-200">Formations</Link></li>
              <li><Link href="/specialisations" className="hover:text-digie-green transition-colors duration-200">Spécialisations</Link></li>
              <li><Link href="/formateurs" className="hover:text-digie-green transition-colors duration-200">Formateurs</Link></li>
              <li><Link href="/actualites" className="hover:text-digie-green transition-colors duration-200">Actualités</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-digie-green" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-digie-green transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-digie-green" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-digie-green transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-digie-green" />
                <span>{contactInfo.website}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-digie-green transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white-800">
          <p>© {new Date().getFullYear()} DigieWomen School. Tous droits réservés.</p>
        </div>
      </div>
    </motion.footer>
  );
}
