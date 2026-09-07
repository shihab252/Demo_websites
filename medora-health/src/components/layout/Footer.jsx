import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const links = [
  { label: "Care", href: "#care" },
  { label: "Conditions", href: "#conditions" },
  { label: "Doctor", href: "#doctor" },
  { label: "Services", href: "#services" },
  { label: "Appointments", href: "#appointment" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
  { label: "Clinic", href: "#clinic" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a1d2d] px-6 pb-8 pt-20 text-white md:px-10 lg:px-16">
      {/* Background architecture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-0 h-full w-px bg-white/[0.035]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-white/[0.035]" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-white/[0.035]" />

        <div className="absolute left-0 top-0 h-px w-full bg-white/[0.04]" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-white/[0.025]" />

        <div className="absolute -right-20 top-40 h-[350px] w-[350px] rounded-full border border-[#72d9e5]/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Main footer */}
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#72d9e5] text-sm font-bold text-[#102a43]">
                N
              </span>

              <span className="text-xl font-semibold tracking-[-0.03em]">
                NEXA
              </span>
            </a>

            <h2 className="mt-8 max-w-xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
              Cardiovascular care,
              <br />
              <span className="text-[#72d9e5]">rethought.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
              A modern healthcare experience designed around clearer
              communication, coordinated care, and better patient journeys.
            </p>

            <a
              href="#appointment"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              Request a consultation

              <ArrowUpRight
                size={16}
                className="text-[#72d9e5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+8801000000000"
                className="flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
              >
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#72d9e5]"
                  strokeWidth={1.7}
                />

                <span>+880 1XXX-XXXXXX</span>
              </a>

              <a
                href="mailto:appointments@example.com"
                className="flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#72d9e5]"
                  strokeWidth={1.7}
                />

                <span>appointments@example.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/55">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#72d9e5]"
                  strokeWidth={1.7}
                />

                <span>
                  Gulshan Medical Centre
                  <br />
                  Road 12, Gulshan 1
                  <br />
                  Dhaka 1212, Bangladesh
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold tracking-[0.05em] text-white/40 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold tracking-[0.05em] text-white/40 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                IN
              </a>

              <a
                href="mailto:appointments@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <Mail size={15} strokeWidth={1.7} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom navigation strip */}
        <div className="flex flex-col gap-7 border-b border-white/5 py-7 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.17em] text-white/25 sm:flex-row sm:gap-5">
            <span>© 2026 NEXA Health</span>

            <span>Demo website concept</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.17em] text-white/25">
            <a
              href="#"
              className="transition hover:text-white/60"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white/60"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-white/60"
            >
              Accessibility
            </a>
          </div>
        </div>

        {/* AI / emergency reminder */}
        <div className="grid gap-6 border-b border-white/5 py-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#72d9e5]/10 bg-[#72d9e5]/[0.03] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#72d9e5]">
              NEXA AI
            </p>

            <p className="mt-2 max-w-md text-xs leading-6 text-white/35">
              NEXA AI provides general informational assistance. It is not a
              doctor and should not be used for diagnosis or treatment
              decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
              Emergency
            </p>

            <p className="mt-2 max-w-md text-xs leading-6 text-white/35">
              This website is not an emergency medical service. For urgent or
              life-threatening concerns, contact your local emergency medical
              service immediately.
            </p>
          </div>
        </div>

        {/* Final disclaimer */}
        <div className="pt-7">
          <p className="mx-auto max-w-5xl text-center text-[10px] leading-5 text-white/20">
            NEXA Health is a fictional website concept created for
            demonstration purposes. Doctor information, clinic information,
            testimonials, contact details, medical information, and imagery
            should be professionally verified and replaced before production
            use.
          </p>
        </div>
      </div>
    </footer>
  );
}