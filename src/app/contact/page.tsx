"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { formations, contactInfo } from "@/data/content";
import { Building2, Landmark, User, Lightbulb, Send, CheckCircle, Loader2 } from "lucide-react";
import {
  heroBadge,
  heroTitle,
  heroDescription,
  staggerContainer,
  staggerItem,
  ctaReveal,
} from "@/lib/animations";
import HeroCarousel from "@/components/HeroCarousel";
import { pageHeroSlides } from "@/data/heroCarousel";

type Profile = "entreprise" | "administration" | "particulier" | "entrepreneur" | null;

const profiles = [
  { id: "entreprise" as const, label: "Une entreprise", icon: Building2 },
  { id: "administration" as const, label: "Une administration", icon: Landmark },
  { id: "particulier" as const, label: "Un particulier", icon: User },
  { id: "entrepreneur" as const, label: "Un entrepreneur", icon: Lightbulb },
];

export default function ContactPage() {
  const [profile, setProfile] = useState<Profile>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile, ...form }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setSuccess(true);
      setForm({});
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeroCarousel slides={pageHeroSlides.contact} ariaLabel="Carousel Contact" />
      <section className="hidden bg-gradient-to-br from-digie-blue to-digie-purple text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span variants={heroBadge} initial="hidden" animate="visible" className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              Contact
            </motion.span>
            <motion.h1 variants={heroTitle} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</motion.h1>
            <motion.p variants={heroDescription} initial="hidden" animate="visible" className="text-lg text-white/90 leading-relaxed">
              Que vous soyez une entreprise, une administration, un particulier ou un entrepreneur,
              nous avons une solution adaptée. Sélectionnez votre profil pour commencer.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="formulaire" className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Profile selector */}
          {!profile && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {profiles.map((p) => (
                <motion.div key={p.id} variants={staggerItem}>
                  <button
                    onClick={() => setProfile(p.id)}
                    className="flex items-center gap-4 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-digie-dark-card hover:border-digie-green hover:shadow-lg transition-all duration-300 text-left w-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-digie-green/10 flex items-center justify-center">
                      <p.icon className="w-6 h-6 text-digie-green" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Vous êtes {p.label.toLowerCase()}
                    </span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Form */}
          {profile && !success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => { setProfile(null); setForm({}); }}
                className="text-sm text-digie-green mb-6 hover:underline transition-colors"
              >
                ← Changer de profil
              </button>

              <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-digie-dark-card rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Formulaire – {profiles.find((p) => p.id === profile)?.label}
                </h2>

                {profile === "entreprise" && (
                  <>
                    <Input label="Nom de l'entreprise" name="entreprise" required value={form.entreprise || ""} onChange={handleChange} />
                    <Input label="Secteur d'activité" name="secteur" required value={form.secteur || ""} onChange={handleChange} />
                    <Input label="Nom du contact" name="contact" required value={form.contact || ""} onChange={handleChange} />
                    <Input label="Fonction" name="fonction" value={form.fonction || ""} onChange={handleChange} />
                    <Input label="Email" name="email" type="email" required value={form.email || ""} onChange={handleChange} />
                    <Input label="Téléphone" name="telephone" type="tel" required value={form.telephone || ""} onChange={handleChange} />
                    <Select
                      label="Besoin exprimé"
                      name="besoin"
                      required
                      value={form.besoin || ""}
                      onChange={handleChange}
                      options={["Formation d'équipe", "Transformation digitale", "Autre"]}
                    />
                  </>
                )}

                {profile === "administration" && (
                  <>
                    <Input label="Nom de l'administration" name="administration" required value={form.administration || ""} onChange={handleChange} />
                    <Input label="Nom du contact" name="contact" required value={form.contact || ""} onChange={handleChange} />
                    <Input label="Fonction" name="fonction" value={form.fonction || ""} onChange={handleChange} />
                    <Input label="Email" name="email" type="email" required value={form.email || ""} onChange={handleChange} />
                    <Input label="Téléphone" name="telephone" type="tel" required value={form.telephone || ""} onChange={handleChange} />
                    <Select
                      label="Type de besoin"
                      name="besoin"
                      required
                      value={form.besoin || ""}
                      onChange={handleChange}
                      options={["GED", "Formation", "Site web", "Autre"]}
                    />
                  </>
                )}

                {profile === "particulier" && (
                  <>
                    <Input label="Nom" name="nom" required value={form.nom || ""} onChange={handleChange} />
                    <Input label="Prénom" name="prenom" required value={form.prenom || ""} onChange={handleChange} />
                    <Input label="Email" name="email" type="email" required value={form.email || ""} onChange={handleChange} />
                    <Input label="Téléphone" name="telephone" type="tel" required value={form.telephone || ""} onChange={handleChange} />
                    <Select
                      label="Formation d'intérêt"
                      name="formation"
                      required
                      value={form.formation || ""}
                      onChange={handleChange}
                      options={formations.map((f) => f.title)}
                    />
                  </>
                )}

                {profile === "entrepreneur" && (
                  <>
                    <Input label="Nom" name="nom" required value={form.nom || ""} onChange={handleChange} />
                    <Input label="Prénom" name="prenom" required value={form.prenom || ""} onChange={handleChange} />
                    <Input label="Nom du projet / structure" name="projet" value={form.projet || ""} onChange={handleChange} />
                    <Input label="Email" name="email" type="email" required value={form.email || ""} onChange={handleChange} />
                    <Input label="Téléphone" name="telephone" type="tel" required value={form.telephone || ""} onChange={handleChange} />
                    <Input label="Domaine d'activité" name="domaine" value={form.domaine || ""} onChange={handleChange} />
                    <Input label="Besoin exprimé" name="besoin" value={form.besoin || ""} onChange={handleChange} />
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message || ""}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-digie-green"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-digie-green text-white font-semibold hover:bg-digie-green-dark transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}

          {/* Success */}
          {success && (
            <motion.div
              variants={ctaReveal}
              initial="hidden"
              animate="visible"
              className="text-center bg-white dark:bg-digie-dark-card rounded-2xl border border-gray-200 dark:border-gray-700 p-10"
            >
              <CheckCircle className="w-16 h-16 text-digie-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Demande envoyée !
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Votre demande a bien été transmise. Notre équipe vous recontactera rapidement.
                <br />
                Vous pouvez aussi nous joindre directement via WhatsApp pour un contact plus immédiat.
              </p>
              <button
                onClick={() => { setSuccess(false); setProfile(null); }}
                className="text-digie-green font-medium hover:underline transition-colors"
              >
                Envoyer une autre demande
              </button>
            </motion.div>
          )}

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          >
            <p>
              Email :{" "}
              <a href={`mailto:${contactInfo.email}`} className="text-digie-green hover:underline transition-colors">
                {contactInfo.email}
              </a>
              {" · "}
              Tél :{" "}
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-digie-green hover:underline transition-colors">
                {contactInfo.phone}
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-digie-green transition-all duration-200"
      />
    </div>
  );
}

function Select({
  label,
  name,
  required,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-digie-green transition-all duration-200"
      >
        <option value="">Sélectionnez...</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
