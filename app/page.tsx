export default function Home() {
  const faqs = [
    {
      q: "Which directories do you monitor?",
      a: "We monitor 50+ top directories including Google Business, Yelp, Bing Places, Apple Maps, Facebook, Foursquare, and many more local citation sources."
    },
    {
      q: "How quickly will I be alerted to inconsistencies?",
      a: "Our automated scanner checks your listings daily and sends email alerts within hours of detecting any name, address, or phone number mismatches."
    },
    {
      q: "Can marketing agencies manage multiple clients?",
      a: "Yes. Agency plans let you manage multiple business profiles from a single dashboard, with per-client reporting and white-label options."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Local SEO
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Your Business Citations<br />
          <span className="text-[#58a6ff]">Across 50+ Directories</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically monitor your business listings, detect inconsistencies, and get email alerts before bad data hurts your local rankings.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $12/mo
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ 50+ directories scanned</span>
          <span>✓ Daily automated checks</span>
          <span>✓ Instant email alerts</span>
          <span>✓ Cancel anytime</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Monitor 1 business location",
              "50+ directory scans",
              "Daily automated monitoring",
              "Email alerts on inconsistencies",
              "Citation health dashboard",
              "NAP consistency reports"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
