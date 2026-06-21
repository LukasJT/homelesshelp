import Link from "next/link";

export const metadata = {
  title: "Get help now — Crisis hotlines and emergency resources",
  description:
    "Free 24/7 hotlines for shelter, mental health crisis, domestic violence, veterans, youth, and LGBTQ+ people experiencing homelessness in the US and Canada.",
};

type Hotline = {
  name: string;
  number: string;
  display: string;
  who: string;
  notes?: string;
  country: "US" | "CA" | "BOTH";
  category: "emergency" | "shelter" | "mental-health" | "dv" | "youth" | "lgbtq" | "veterans" | "addiction";
  href?: string;
};

const HOTLINES: Hotline[] = [
  {
    name: "Emergency (US & Canada)",
    number: "911",
    display: "911",
    who: "Life-threatening emergencies, medical, fire, crime in progress.",
    country: "BOTH",
    category: "emergency",
  },
  {
    name: "211 — Health and human services",
    number: "211",
    display: "Dial 211",
    who: "Free 24/7 referral line for shelter, food, rent assistance, mental health.",
    notes:
      "Operated by United Way in the US; same number in most of Canada. Knows the local services in your area code.",
    country: "BOTH",
    category: "shelter",
    href: "https://www.211.org",
  },
  {
    name: "988 — Suicide & Crisis Lifeline",
    number: "988",
    display: "Call or text 988",
    who: "Mental health crisis, suicidal thoughts, emotional distress.",
    notes: "Free, confidential, 24/7. Press 1 for the Veterans Crisis Line.",
    country: "BOTH",
    category: "mental-health",
    href: "https://988lifeline.org",
  },
  {
    name: "SAMHSA National Helpline",
    number: "1-800-662-4357",
    display: "1-800-662-HELP",
    who: "Free, confidential treatment referrals for substance use and mental health.",
    notes: "English and Spanish. 24/7.",
    country: "US",
    category: "addiction",
    href: "https://www.samhsa.gov/find-help/national-helpline",
  },
  {
    name: "National Domestic Violence Hotline",
    number: "1-800-799-7233",
    display: "1-800-799-SAFE",
    who: "If you're in an unsafe home or relationship.",
    notes: "Text START to 88788. Also chat at thehotline.org.",
    country: "US",
    category: "dv",
    href: "https://www.thehotline.org",
  },
  {
    name: "Canada VictimLink BC / Assaulted Women's Helpline",
    number: "1-866-863-0511",
    display: "1-866-863-0511 (ON) / 1-800-563-0808 (BC)",
    who: "Domestic and sexual violence support across Canada.",
    notes: "Each province has its own line — 211 can route you to the closest one.",
    country: "CA",
    category: "dv",
    href: "https://www.awhl.org",
  },
  {
    name: "Veterans Crisis Line (US)",
    number: "988",
    display: "Dial 988 then press 1",
    who: "Veterans and their families in crisis.",
    notes: "Or text 838255. Connects you with VA responders.",
    country: "US",
    category: "veterans",
    href: "https://www.veteranscrisisline.net",
  },
  {
    name: "National Call Center for Homeless Veterans",
    number: "1-877-424-3838",
    display: "1-877-424-3838",
    who: "Veterans who are homeless or at risk.",
    notes: "Free, 24/7. Connects to VA resources and benefits.",
    country: "US",
    category: "veterans",
    href: "https://www.va.gov/homeless/nationalcallcenter.asp",
  },
  {
    name: "National Runaway Safeline",
    number: "1-800-786-2929",
    display: "1-800-RUNAWAY",
    who: "Youth under 21 considering running away, or already on the street.",
    notes: "Free, confidential, 24/7. Text or chat at 1800runaway.org.",
    country: "US",
    category: "youth",
    href: "https://www.1800runaway.org",
  },
  {
    name: "Kids Help Phone (Canada)",
    number: "1-800-668-6868",
    display: "1-800-668-6868 / Text CONNECT to 686868",
    who: "Anyone under 20 in Canada.",
    notes: "Free, confidential, 24/7 in English and French.",
    country: "CA",
    category: "youth",
    href: "https://kidshelpphone.ca",
  },
  {
    name: "Trans Lifeline",
    number: "1-877-565-8860",
    display: "1-877-565-8860 (US) / 1-877-330-6366 (CA)",
    who: "Trans people in crisis. Staffed by trans operators.",
    notes: "Free. Hours vary; check website for current coverage.",
    country: "BOTH",
    category: "lgbtq",
    href: "https://translifeline.org",
  },
  {
    name: "Trevor Project (LGBTQ+ youth)",
    number: "1-866-488-7386",
    display: "Call 1-866-488-7386 / Text START to 678-678",
    who: "LGBTQ+ young people under 25 in crisis.",
    notes: "Free, confidential, 24/7. Chat at thetrevorproject.org.",
    country: "BOTH",
    category: "lgbtq",
    href: "https://www.thetrevorproject.org",
  },
  {
    name: "Covenant House NINELINE",
    number: "1-800-388-3888",
    display: "1-800-999-9999",
    who: "Crisis line for homeless and runaway youth.",
    notes: "Free, 24/7. Connects to shelter at Covenant House sites.",
    country: "BOTH",
    category: "youth",
    href: "https://www.covenanthouse.org",
  },
];

const CATEGORY_LABEL: Record<Hotline["category"], string> = {
  emergency: "Emergency",
  shelter: "Shelter referrals",
  "mental-health": "Mental health crisis",
  dv: "Domestic violence",
  youth: "Youth & runaway",
  lgbtq: "LGBTQ+",
  veterans: "Veterans",
  addiction: "Substance use",
};

const ORDER: Hotline["category"][] = [
  "emergency",
  "shelter",
  "mental-health",
  "dv",
  "youth",
  "lgbtq",
  "veterans",
  "addiction",
];

export default function GetHelpPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <header className="rounded-xl bg-danger/10 border border-danger/30 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-danger">If you're in immediate danger</p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Call 911 or 988 right now.</h1>
        <p className="mt-2 text-ink-soft">
          <strong>988</strong> is the US and Canada suicide and crisis lifeline — free, confidential, 24/7.
          <strong className="ml-2">911</strong> is for immediate medical or safety emergencies.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="tel:911" className="rounded-md bg-danger px-4 py-2 font-semibold text-white">Call 911</a>
          <a href="tel:988" className="rounded-md bg-ink px-4 py-2 font-semibold text-white">Call 988</a>
          <a href="sms:741741?body=HOME" className="rounded-md bg-brand px-4 py-2 font-semibold text-white">
            Text HOME to 741741
          </a>
        </div>
      </header>

      <p className="mt-8 text-ink-soft">
        Every number below is free, confidential, and answered by trained people. They are good at meeting
        you where you are — you don't have to know what you need before you call.
      </p>

      {ORDER.map((cat) => {
        const items = HOTLINES.filter((h) => h.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} className="mt-10">
            <h2 className="text-xl font-semibold text-ink">{CATEGORY_LABEL[cat]}</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {items.map((h) => (
                <div key={h.name + h.number} className="rounded-lg border border-brand-light/60 bg-white p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-semibold text-ink">{h.name}</p>
                    <span className="text-[10px] rounded bg-paper px-1.5 py-0.5 text-ink-muted">
                      {h.country === "BOTH" ? "US & Canada" : h.country}
                    </span>
                  </div>
                  <a
                    href={`tel:${h.number.replace(/[^0-9+]/g, "")}`}
                    className="mt-1 block text-lg font-semibold text-brand"
                  >
                    {h.display}
                  </a>
                  <p className="mt-1 text-sm text-ink-soft">{h.who}</p>
                  {h.notes && <p className="mt-2 text-xs text-ink-muted">{h.notes}</p>}
                  {h.href && (
                    <a href={h.href} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-brand underline">
                      More info
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-12 rounded-lg bg-white p-6 border border-brand-light/60">
        <h2 className="text-lg font-semibold text-ink">Need a bed tonight?</h2>
        <p className="mt-2 text-ink-soft">
          The fastest way to find an open bed is to call <strong>211</strong> from a local phone — they keep
          live information on shelter capacity. Or open the{" "}
          <Link href="/map" className="text-brand underline">
            map
          </Link>{" "}
          and call the shelters nearest you directly.
        </p>
      </div>
    </section>
  );
}
