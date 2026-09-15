import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Crown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  Feather,
  Users,
  X,
} from "lucide-react";

import heroAsset from "@/assets/hg-hero-clean.jpg.asset.json";
import bridalAsset from "@/assets/hg-bridal-clean.jpg.asset.json";
import mantleAsset from "@/assets/hg-mantle-clean.jpg.asset.json";
import kidsAsset from "@/assets/hg-kids-clean.jpg.asset.json";

const WHATSAPP = "https://wa.me/27793668659";
const EMAIL = "ketubahheavenlygarments@gmail.com";

const NAV = [
  { label: "Home", key: "home" },
  { label: "Vision", key: "vision" },
  { label: "Collections", key: "collections" },
  { label: "Our Story", key: "heart" },
  { label: "Process", key: "bespoke" },
  { label: "Contact", key: "contact" },
] as const;

type SectionKey = (typeof NAV)[number]["key"];

const PILLARS = [
  {
    t: "Kingdom Principles",
    d: "Every garment honouring His ways — modest, royal, set apart. Not fashion, but priestly clothing.",
  },
  {
    t: "Heaven to Earth",
    d: "Drawing frequencies closer. When Heaven designs, Earth is clothed in Light. Garments that carry Presence.",
  },
  {
    t: "For Kings & Queens",
    d: "Gifted to His princes & princesses. You are royalty. Your garment should remember who you are.",
  },
];

const COLLECTIONS = [
  {
    title: "For Kings & Princes",
    desc: "Gifted to His princes and kings. You are royalty. Your garment will carry His authority into eternity.",
    img: heroAsset.url,
    badge: "For Kings & Princes",
  },
  {
    title: "Queens & Princesses",
    desc: "Clothed in Light, Bound by Covenant. Purposefully designed for her royal moment.",
    img: bridalAsset.url,
    badge: "Covenant Moment",
  },
  {
    title: "Mantles of Authority",
    desc: "A ketonot of light to wear as you obey. Garments of Grace from Heaven to Earth.",
    img: mantleAsset.url,
    badge: "Garments of Grace",
  },
  {
    title: "Heavenly Kids",
    desc: "Stitching Heaven into every childhood. For His little princes and princesses.",
    img: kidsAsset.url,
    badge: "Little Princes and Princesses",
  },
];

const PROCESS = [
  {
    n: "01",
    icon: Feather,
    title: "Seek the Vision",
    desc: "We begin with prayer — your story, your assignment, your mountain. What is Abba saying about this garment? Who are you becoming in it?",
  },
  {
    n: "02",
    icon: Scissors,
    title: "Design Purposefully",
    desc: "We drape in natural silks and stone linens. No templates — only revelation. Every cut honouring Kingdom modesty, royalty, and ease.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Clothed in Light",
    desc: "Final fitting with a blessing stitch hidden at the hem. Gold thread prayer sewn within. You leave not dressed, but commissioned.",
  },
];

const GARMENT_LINES = [
  "Kings & Priests",
  "Brides & Princesses",
  "Mantles of Purpose",
  "Heavenly Kids",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ketubah: Heavenly Garments | Bespoke Atelier, Mpumalanga" },
      {
        name: "description",
        content:
          "Purposefully designed heavenly garments from Mpumalanga, South Africa. Bespoke bridal, mantles, and children's pieces — clothed in Light, bound by Covenant.",
      },
      { property: "og:title", content: "Ketubah: Heavenly Garments" },
      {
        property: "og:description",
        content:
          "Bespoke covenant atelier in Mpumalanga, South Africa. Clothed in Light, bound by Covenant.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<SectionKey>("home");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    occasion: "",
    garmentType: "Kings & Priests",
    message: "",
  });

  const refs: Record<SectionKey, React.RefObject<HTMLElement | null>> = {
    home: useRef<HTMLElement>(null),
    vision: useRef<HTMLElement>(null),
    collections: useRef<HTMLElement>(null),
    heart: useRef<HTMLElement>(null),
    bespoke: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const go = (key: SectionKey) => {
    setMenuOpen(false);
    setActive(key);
    if (key === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    refs[key].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const whatsappLink = () => {
    const text = [
      `Shalom Janine & Emmie, this is ${form.name || "a friend"}.`,
      form.occasion ? `Occasion: ${form.occasion}.` : "",
      `Garment line: ${form.garmentType}.`,
      form.message ? `My vision: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    return `${WHATSAPP}?text=${encodeURIComponent(text)}`;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    window.open(whatsappLink(), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone text-espresso">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-stone-dark/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] w-full max-w-[1320px] items-center justify-between gap-6 px-6 md:px-10">
          <button onClick={() => go("home")} className="group min-w-0 text-left">
            <div className="display text-[22px] leading-none font-semibold tracking-[0.18em] text-espresso transition-colors group-hover:text-gold-deep md:text-[26px]">
              <span className="whitespace-nowrap">
                KETUBAH
                <span className="font-light tracking-[0.08em]">: Heavenly Garments</span>
              </span>
            </div>
            <div className="mt-1 text-[9px] font-medium tracking-[0.32em] uppercase text-gold-deep">
              Purposefully Designed • Clothed in Light
            </div>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={`whitespace-nowrap text-[11px] font-medium tracking-[0.18em] uppercase transition-colors ${
                  active === item.key
                    ? "text-espresso underline decoration-gold/70 underline-offset-[10px]"
                    : "text-espresso/60 hover:text-espresso"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="h-6 w-px bg-stone-dark" />
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-gold px-6 text-[11px] font-medium tracking-[0.16em] whitespace-nowrap uppercase text-ink shadow-[0_10px_24px_-10px_rgba(198,168,124,0.6)] transition-all hover:scale-[1.02] hover:bg-gold-soft active:scale-[0.98]"
            >
              Book Consultation
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-stone-dark bg-white text-espresso lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-stone-dark bg-white/95 px-6 py-7 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-5">
              {NAV.map((item) => (
                <button
                  key={item.key}
                  onClick={() => go(item.key)}
                  className="text-left text-[12px] font-medium tracking-[0.22em] uppercase text-espresso/70"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-gold text-[11px] font-medium tracking-[0.16em] uppercase text-ink"
              >
                Book Consultation <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        ref={refs.home}
        className="relative flex min-h-[82vh] items-center overflow-hidden bg-ink md:min-h-[88vh]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-ink/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(198,168,124,0.25),transparent_60%)] opacity-60" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-[720px]">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] tracking-[0.28em] uppercase text-stone backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Mpumalanga • South Africa — A Story of Light and Promise
            </div>

            <h1 className="display leading-[0.9] text-white">
              <span className="text-gold-glow block text-[44px] font-semibold tracking-[0.08em] text-gold md:text-[78px]">
                KETUBAH
              </span>
              <span className="mt-2 block text-[36px] font-light tracking-tight text-white/90 md:text-[56px]">
                Heavenly Garments
              </span>
            </h1>

            <div className="mt-6 flex flex-col gap-2">
              <p className="display-light text-[22px] leading-[1.1] text-stone md:text-[28px]">
                Clothed in Light, Bound by Covenant
              </p>
              <p className="mt-2 text-[11px] font-medium tracking-[0.32em] uppercase text-gold">
                Purposefully Designed
              </p>
            </div>

            <p className="mt-8 max-w-[48ch] text-[14px] leading-[1.8] font-light text-white/70 md:text-[15px]">
              Abba is drawing the frequencies between Heaven and Earth closer. He wants to
              gift His princes and princesses, kings and queens with His own designed
              heavenly garments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => go("vision")}
                className="flex h-[48px] items-center gap-2 rounded-full bg-gold px-8 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink shadow-[0_12px_32px_-10px_rgba(198,168,124,0.6)] transition-all hover:scale-[1.02] hover:bg-gold-soft active:scale-[0.98]"
              >
                Explore the Vision <ArrowRight size={14} />
              </button>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[48px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 text-[11px] font-medium tracking-[0.18em] uppercase text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                Book Consultation
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-[11px] text-white/50">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-gold/50" /> By Appointment
              </div>
              <span>Janine &amp; Emmie • Founders</span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone to-transparent" />
      </section>

      {/* Vision */}
      <section ref={refs.vision} className="relative overflow-hidden bg-stone">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-white/40 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-[1020px] px-6 py-20 text-center md:px-10 md:py-32">
          <div className="mb-10 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
          <h2 className="mb-8 text-[10px] font-medium tracking-[0.36em] uppercase text-gold-deep">
            The Vision
          </h2>
          <blockquote className="relative">
            <div className="display absolute -top-10 left-1/2 -translate-x-1/2 text-[80px] leading-none text-gold/15">
              &ldquo;
            </div>
            <p className="display text-[28px] leading-[1.2] font-light text-espresso md:text-[42px]">
              <span className="mb-2 block text-[20px] font-medium tracking-[0.18em] uppercase not-italic text-espresso">
                Abba
              </span>
              <span className="display-light text-cocoa">
                What a splendouring vision it is to bring your heart and love to your
                people and honouring your Kingdom Principles. Abba is drawing the
                frequencies between Heaven and Earth closer. He wants to gift his princes
                &amp; princesses, his kings &amp; queens with His own designed heavenly
                garments.
              </span>
            </p>
          </blockquote>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/30" />
            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-taupe">
              <Sparkles size={12} className="text-gold" /> A covenant atelier
            </div>
            <div className="h-px w-16 bg-gold/30" />
          </div>

          <div className="mt-16 grid gap-6 text-left md:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.t}
                className="rounded-[22px] border border-white bg-white/70 p-6 backdrop-blur"
              >
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-deep">
                  {p.t}
                </div>
                <p className="mt-3 text-[13px] leading-[1.7] text-cocoa">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section ref={refs.collections} className="border-y border-stone-dark bg-cream">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase text-gold-deep">
                <span className="h-px w-8 bg-gold/40" /> Collections
              </div>
              <h2 className="display mt-4 text-[44px] leading-[0.88] font-light tracking-[-0.02em] text-espresso md:text-[60px]">
                Wear Heaven Daily
              </h2>
            </div>
            <p className="max-w-[36ch] text-[13.5px] leading-[1.75] font-light text-cocoa">
              Purposefully Designed — clothed in Light, bound by Covenant. Four heavenly
              callings, one royal lineage.
            </p>
          </div>

          <div className="relative mx-auto mb-14 max-w-[800px] md:mb-20">
            <div className="flex justify-center">
              <div className="h-px w-[88px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            </div>
            <div className="mt-7 rounded-[28px] border border-stone-dark bg-stone/75 px-7 py-9 text-center shadow-[0_16px_40px_-20px_rgba(59,52,46,0.12)] md:px-12 md:py-11">
              <div className="mx-auto max-w-[64ch]">
                <p className="display text-[18px] leading-[1.65] font-light italic tracking-[-0.01em] text-espresso md:text-[22px]">
                  &ldquo;Therefore, as God&rsquo;s chosen people, holy and dearly loved,
                  clothe yourselves with compassion, kindness, humility, gentleness and
                  patience. Bear with each other and forgive one another... And over all
                  these virtues put on love, which binds them all together in perfect
                  unity.&rdquo;
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <span className="h-px w-7 bg-gold/40" />
                  <span className="text-[10px] font-semibold tracking-[0.34em] uppercase text-gold-deep">
                    Colossians 3:12-14
                  </span>
                  <span className="h-px w-7 bg-gold/40" />
                </div>
              </div>
            </div>
            <div className="mt-7 flex justify-center">
              <div className="h-px w-[88px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {COLLECTIONS.map((c) => (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-[28px] border border-stone-dark bg-white shadow-[0_24px_64px_-24px_rgba(59,52,46,0.12)] transition-all duration-500 hover:shadow-[0_32px_80px_-20px_rgba(59,52,46,0.18)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                  <img
                    src={c.img}
                    alt={`${c.title} — bespoke heavenly garment by Ketubah Heavenly Garments`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <div className="rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[9px] font-medium tracking-[0.2em] uppercase text-espresso shadow-sm backdrop-blur">
                      {c.badge}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3 className="display text-[28px] leading-[0.9] font-medium tracking-[-0.01em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-colors duration-300 group-hover:text-gold-soft md:text-[32px]">
                      {c.title}
                    </h3>
                    <div className="mt-3 h-[1.5px] w-0 bg-gold transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
                <div className="bg-white p-6 md:p-7">
                  <p className="text-[13.5px] leading-[1.7] font-light text-cocoa">
                    {c.desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-taupe">
                      <span className="h-px w-6 bg-gold/30" /> Purposefully Designed
                    </span>
                    <button
                      onClick={() => go("contact")}
                      aria-label={`Enquire about ${c.title}`}
                      className="grid h-7 w-7 place-items-center rounded-full bg-stone text-gold-deep transition-colors group-hover:bg-gold group-hover:text-white"
                    >
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Heart */}
      <section
        ref={refs.heart}
        className="overflow-hidden border-b border-stone-dark bg-stone"
      >
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-6 py-16 md:gap-20 md:px-10 md:py-28 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase text-taupe">
              <span className="h-px w-8 bg-gold-deep/30" /> Our Heart
            </div>
            <h2 className="display mt-5 text-[32px] leading-[0.95] tracking-tight text-espresso md:text-[48px]">
              Our Heart — A Story of
              <br />
              <span className="display-light text-taupe">Light and Promise</span>
            </h2>
            <div className="mt-8">
              <div className="mb-8 h-px w-12 bg-gold/40" />
              <p className="text-[18px] leading-[1.8] font-light tracking-[-0.01em] text-espresso md:text-[22px]">
                Ketubah Heavenly Garments was a reminder from{" "}
                <span className="display font-semibold tracking-[0.04em] text-gold-deep">
                  YHVH
                </span>{" "}
                and a revelation of how He clothed His sons in the Bible with garments of
                Grace. He has a special Ketubah written in Heaven for each precious soul
                and a{" "}
                <span className="display font-semibold italic text-gold-deep">ketonot</span>{" "}
                <span className="text-[15px] font-normal text-taupe">
                  (garment of light)
                </span>{" "}
                to wear as you obey.
              </p>
            </div>

            <div className="mt-10 flex gap-4 rounded-[20px] border border-stone-dark bg-white p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-stone text-gold-deep">
                <Crown size={18} />
              </div>
              <div>
                <p className="display text-[17px] leading-[1.4] italic text-espresso">
                  &ldquo;A special Ketubah written in Heaven for each precious soul.&rdquo;
                </p>
                <p className="mt-2 text-[11px] tracking-[0.16em] uppercase text-taupe">
                  — The revelation • Garments of Grace
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-stone-dark bg-white px-4 py-2 text-[10px] tracking-[0.18em] uppercase text-cocoa">
                <MapPin size={12} className="text-gold-deep" /> Mpumalanga, South Africa
              </div>
              <div className="flex items-center gap-2 rounded-full bg-espresso px-4 py-2 text-[10px] tracking-[0.18em] uppercase text-white">
                <Users size={12} className="text-gold" /> By Janine &amp; Emmie
              </div>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="relative mx-auto max-w-[520px]">
              <div className="absolute -inset-4 rounded-[36px] border border-white bg-white/50 blur-[1px]" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-[24px] border border-stone-dark bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.15)]">
                    <div
                      className="aspect-[3/4] bg-cover bg-center"
                      style={{ backgroundImage: `url(${bridalAsset.url})` }}
                      role="img"
                      aria-label="Bridal queen garment"
                    />
                    <div className="p-3">
                      <div className="text-[9px] tracking-[0.2em] uppercase text-taupe">
                        Princess Mantle • Look 02
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[20px] border border-white/10 bg-espresso p-5 text-stone">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-gold">
                      Founders
                    </div>
                    <div className="display mt-2 text-[16px] leading-[1.2]">
                      Janine Ester Liversage &amp; Emmie Hepzibah Roelofse
                    </div>
                    <div className="mt-3 h-px bg-white/10" />
                    <div className="mt-3 text-[11px] leading-[1.5] text-white/60">
                      Two daughters, one vision — clothing generations in Light.
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-[24px] border border-stone-dark bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.15)]">
                    <div
                      className="aspect-[4/5] bg-cover bg-center"
                      style={{ backgroundImage: `url(${mantleAsset.url})` }}
                      role="img"
                      aria-label="Prophetic mantle"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[24px] border border-stone-dark bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.15)]">
                    <div
                      className="aspect-square bg-cover bg-center"
                      style={{ backgroundImage: `url(${kidsAsset.url})` }}
                      role="img"
                      aria-label="Heavenly kids"
                    />
                    <div className="bg-cream p-3">
                      <div className="text-[9px] font-medium tracking-[0.2em] uppercase text-gold-deep">
                        Heavenly Kids • Pure Joy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-[18px] border border-stone-dark bg-white px-4 py-3 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.18)] md:left-0">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-stone text-gold-deep">
                  <Crown size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-espresso">
                    Clothed in Light
                  </div>
                  <div className="text-[11px] text-taupe">Bound by Covenant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={refs.bespoke} className="relative overflow-hidden bg-ink text-stone">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(198,168,124,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[80px]" />
        <div className="relative mx-auto w-full max-w-[1320px] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[680px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] tracking-[0.24em] uppercase">
              <Sparkles size={12} className="text-gold" /> Purposefully Designed Process
            </div>
            <h2 className="display mt-6 text-[34px] leading-[0.9] md:text-[50px]">
              From vision
              <br />
              <span className="display-light text-gold">to heavenly garment.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-[13.5px] leading-[1.7] text-white/60">
              Not made-to-order. Revealed-to-order. Each piece sought in prayer, designed
              with purpose, finished in light.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
            {PROCESS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur transition-colors hover:border-gold/30 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                      <Icon size={18} />
                    </div>
                    <div className="display text-[36px] leading-none font-extralight text-white/10 transition-colors group-hover:text-white/20">
                      {step.n}
                    </div>
                  </div>
                  <h3 className="display mt-7 text-[20px] font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-white/60">
                    {step.desc}
                  </p>
                  <div className="mt-6 h-px bg-white/10 transition-colors group-hover:bg-gold/20" />
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center gap-2 rounded-full bg-gold px-8 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink transition-colors hover:bg-gold-soft"
            >
              Begin your garment <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={refs.contact} className="border-t border-stone-dark bg-stone">
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-6 py-16 md:gap-16 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase text-taupe">
              <span className="h-px w-8 bg-gold-deep/30" /> Contact &amp; Atelier
            </div>
            <h2 className="display mt-4 text-[36px] leading-[0.9] tracking-tight text-espresso md:text-[48px]">
              Let&rsquo;s create
              <br />
              <span className="display-light text-taupe">your heavenly garment.</span>
            </h2>
            <p className="mt-5 max-w-[38ch] text-[14px] leading-[1.75] font-light text-cocoa">
              We reply within a day with fabric, prayer, and next steps. In-person in
              Mpumalanga and virtual worldwide.
            </p>

            <div className="mt-8 space-y-4 rounded-[22px] border border-stone-dark bg-white p-6 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-stone text-gold-deep">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-taupe">
                    Email us
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-[13.5px] font-medium text-espresso hover:text-gold-deep"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="h-px bg-stone" />
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-stone text-gold-deep">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-taupe">
                    WhatsApp / Call
                  </div>
                  <a
                    href="tel:+27793668659"
                    className="text-[13.5px] font-medium text-espresso hover:text-gold-deep"
                  >
                    +27 79 366 8659
                  </a>
                </div>
              </div>
              <div className="h-px bg-stone" />
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-espresso text-gold">
                  <Users size={16} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-taupe">
                    Founders
                  </div>
                  <div className="text-[12.5px] leading-snug font-medium text-espresso">
                    Janine Ester Liversage
                    <br />
                    Emmie Hepzibah Roelofse
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 text-[11px] text-taupe">
                <MapPin size={12} className="text-gold-deep" /> Mpumalanga, South Africa —
                by appointment
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-[11px] font-medium tracking-[0.16em] uppercase text-white shadow-[0_8px_20px_-8px_rgba(37,211,102,0.5)] transition-colors hover:brightness-95"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> WhatsApp
                Us
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex h-11 items-center justify-center gap-2 rounded-full border border-stone-dark bg-white px-6 text-[11px] font-medium tracking-[0.16em] uppercase text-espresso transition-colors hover:border-gold-deep/40"
              >
                Email Atelier
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-stone-dark bg-white p-7 shadow-[0_24px_48px_-20px_rgba(59,52,46,0.14)] md:p-8">
            {!sent ? (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-medium tracking-[0.18em] uppercase text-taupe"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your covenant name"
                      className="h-11 w-full rounded-full border border-stone bg-cream px-4 text-[13.5px] transition-all outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="occasion"
                      className="block text-[10px] font-medium tracking-[0.18em] uppercase text-taupe"
                    >
                      Occasion / Assignment
                    </label>
                    <input
                      id="occasion"
                      value={form.occasion}
                      onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                      placeholder="Ketubah, bridal, mountain mantle..."
                      className="h-11 w-full rounded-full border border-stone bg-cream px-4 text-[13.5px] transition-all outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-[10px] font-medium tracking-[0.18em] uppercase text-taupe">
                    Garment Line
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {GARMENT_LINES.map((line) => (
                      <button
                        key={line}
                        type="button"
                        onClick={() => setForm({ ...form, garmentType: line })}
                        className={`h-10 rounded-full border px-3 text-[10.5px] font-medium tracking-[0.12em] uppercase transition-all ${
                          form.garmentType === line
                            ? "border-espresso bg-espresso text-white"
                            : "border-stone bg-cream text-cocoa hover:border-gold/40"
                        }`}
                      >
                        {line}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-medium tracking-[0.18em] uppercase text-taupe"
                  >
                    Tell us your vision
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What is Abba showing you? Modesty needs, colours you carry, your story..."
                    rows={4}
                    className="w-full resize-none rounded-[20px] border border-stone bg-cream p-4 text-[13.5px] leading-[1.6] transition-all outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-[11px] font-semibold tracking-[0.18em] uppercase text-ink shadow-[0_10px_20px_-10px_rgba(176,141,87,0.5)] transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send via WhatsApp <ArrowRight size={14} />
                </button>
                <p className="text-center text-[10px] leading-relaxed tracking-wide text-taupe">
                  Your details open a WhatsApp message to the atelier — nothing is stored
                  here.
                  <br />
                  <span className="text-gold-deep">
                    By appointment • Mpumalanga &amp; virtual worldwide
                  </span>
                </p>
              </form>
            ) : (
              <div className="py-14 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-stone-dark bg-stone text-gold-deep">
                  <Sparkles size={20} />
                </div>
                <h3 className="display mt-5 text-[24px] font-semibold text-espresso">
                  Thank you, {form.name.split(" ")[0] || "beloved"}.
                </h3>
                <p className="mx-auto mt-3 max-w-[36ch] text-[13px] leading-[1.65] text-cocoa">
                  Your vision for {form.garmentType} is ready in WhatsApp — press send there
                  and Janine &amp; Emmie will reply with fabric and next steps.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-[11px] font-medium tracking-[0.16em] uppercase text-white"
                >
                  Open WhatsApp again
                </a>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 block w-full text-[11px] tracking-[0.18em] uppercase text-gold-deep hover:text-espresso"
                >
                  Send another vision
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-stone">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(198,168,124,0.12),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-[1320px] px-6 py-14 md:px-10 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
            <div>
              <div className="display text-[24px] leading-none font-semibold tracking-[0.16em] text-white">
                KETUBAH<span className="font-light">: Heavenly Garments</span>
              </div>
              <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-gold">
                Clothed in Light, Bound by Covenant
              </div>
              <p className="mt-6 max-w-[36ch] text-[13px] leading-[1.7] text-white/50">
                Purposefully designed heavenly garments from Mpumalanga, South Africa. A
                story of light and promise — for kings, queens, princes, princesses, and
                little ones.
              </p>
              <div className="mt-8 flex items-center gap-2">
                <div className="h-px w-8 bg-gold/30" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
                  Est. Mpumalanga • By appointment
                </span>
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/30">
                Collections
              </div>
              <div className="mt-5 space-y-3">
                {[
                  "Kings & Priests",
                  "Brides & Princesses",
                  "Mantles of Purpose",
                  "Heavenly Kids",
                ].map((label) => (
                  <button
                    key={label}
                    onClick={() => go("collections")}
                    className="block text-left text-[12.5px] text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/30">
                Atelier
              </div>
              <div className="mt-5 space-y-3">
                {NAV.filter((n) => n.key !== "home").map((item) => (
                  <button
                    key={item.key}
                    onClick={() => go(item.key)}
                    className="block text-left text-[12.5px] text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/30">
                Connect
              </div>
              <div className="mt-5 space-y-3 text-[12.5px] text-white/60">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-gold" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-white">
                    {EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-gold" />
                  <a href="tel:+27793668659" className="hover:text-white">
                    +27 79 366 8659
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Users size={12} className="mt-0.5 text-gold" />
                  <span>
                    Janine Ester Liversage
                    <br />
                    Emmie Hepzibah Roelofse
                  </span>
                </div>
                <div className="pt-4">
                  <div className="rounded-[14px] border border-white/10 bg-white/[0.06] p-3">
                    <div className="text-[10px] tracking-[0.18em] uppercase text-white/40">
                      Atelier
                    </div>
                    <div className="mt-1 text-[11px] leading-[1.5] text-white/60">
                      Mpumalanga, South Africa — by appointment &amp; virtual worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <div className="text-center text-[11px] tracking-wide text-white/30 md:text-left">
              © {new Date().getFullYear()} Ketubah Heavenly Garments — Mpumalanga, South
              Africa
              <span className="hidden md:inline"> • </span>
              <br className="md:hidden" />
              Purposefully Designed • Clothed in Light, Bound by Covenant
            </div>
            <div className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-white/30">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" /> Atelier
              open for bespoke
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 text-[11px] font-medium tracking-[0.18em] uppercase text-white shadow-[0_16px_32px_-8px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.03]"
      >
        <Phone size={14} /> WhatsApp
      </a>
    </div>
  );
}
