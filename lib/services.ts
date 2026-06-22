import type { Service } from "./shelters";

export interface ServiceProfile {
  slug: string;
  matchServices: Service[];
  title: string;
  shortTitle: string;
  hero: string;
  intro: string;
  tips: string[];
  related: { slug: string; title: string }[];
}

const PROFILES: ServiceProfile[] = [
  {
    slug: "food",
    matchServices: ["meals", "food-pantry"],
    title: "Free meals and food pantries near you",
    shortTitle: "Free food",
    hero: "Soup kitchens, free-meal programs, and food pantries — all free, no questions asked.",
    intro:
      "Free meals and food pantries are the most accessible resource in the homeless services ecosystem — most don't require ID, an address, or any paperwork. Programs broadly come in two forms: soup kitchens / meal programs serve hot meals on-site at set times; food pantries hand you raw food to take with you. The map below filters to both.",
    tips: [
      "Soup kitchens have set times — usually breakfast, lunch, and/or dinner. Arrive 30 minutes early to get in line, especially for popular programs like Glide (SF), Holy Apostles (NYC), or Pacific Garden Mission (Chicago).",
      "Most food pantries require nothing, but a few ask for proof of address. If you don't have an address, day shelters often act as proxies — ask them.",
      "If you have a way to cook, food pantries stretch much further than soup kitchens. A small alcohol stove + a pot makes pantry rice and beans into a real meal.",
      "Faith-based meal programs are open to everyone regardless of religion. You don't have to participate in services to eat.",
      "Mobile meals reach areas with no fixed-site programs — search '[your city] food truck homeless' or ask the local CoC.",
    ],
    related: [
      { slug: "daily-survival-guide", title: "Daily survival guide: showers, charging, food" },
      { slug: "if-you-become-homeless", title: "What to do if you become homeless" },
    ],
  },
  {
    slug: "medical",
    matchServices: ["medical", "healthcare", "mental-health"],
    title: "Free clinics and healthcare for the unhoused",
    shortTitle: "Free healthcare",
    hero: "Free and low-cost medical care, mental-health, and dental services — sliding-scale, no insurance required.",
    intro:
      "Healthcare for the homeless is delivered through a mix of FQHCs (federally qualified health centers), Health Care for the Homeless programs, and free clinics run by nonprofits. These provide primary care, mental health, addiction treatment, and dental care to people regardless of insurance or ability to pay. Many also embed within day shelters so you don't have to leave the building you've already entered.",
    tips: [
      "Ask for a 'sliding-scale' or 'income-based' fee at any FQHC. Most charge $0–$20 per visit for low-income patients.",
      "Boston Health Care for the Homeless Program is the country's largest specialty model — clinics located inside shelters, hospitals, and outreach vans. Many cities have similar programs.",
      "Many free clinics have specific 'open days' or call-in hours. Check the website for intake instructions before you go.",
      "The 988 Suicide & Crisis Lifeline (US & Canada) is also free, 24/7, for mental health crisis.",
      "Dental care is harder to find. Whitman-Walker (DC), Saban (LA), So Others Might Eat (DC), and many FQHCs have dental clinics.",
    ],
    related: [
      { slug: "daily-survival-guide", title: "Daily survival guide" },
      { slug: "mental-illness-and-homelessness", title: "Mental illness and homelessness" },
    ],
  },
  {
    slug: "housing-help",
    matchServices: ["transitional-housing", "permanent-housing", "supportive-housing", "case-management"],
    title: "Housing programs: transitional, permanent, and supportive",
    shortTitle: "Housing help",
    hero: "Programs that get you out of shelter and into a home — rapid rehousing, Housing First, supportive housing.",
    intro:
      "The path from shelter to stable housing usually runs through one of these programs. Rapid rehousing provides a short rental subsidy plus help finding an apartment — best for transitional homelessness. Permanent supportive housing (PSH) pairs a permanent unit with case-management services for chronic cases. Transitional housing is a structured short-term stay (3-24 months) with services attached. All require an intake or coordinated-entry assessment to enter.",
    tips: [
      "Coordinated entry is the single most important meeting in your first weeks of homelessness. It's the only way most cities prioritize people for housing programs. Find your local intake via 211.",
      "Rapid rehousing is the fastest path back to a normal lease — usually 3–12 months of subsidy plus help finding a landlord. Best fit if you have any income.",
      "Housing First means you get the apartment first, without sobriety or treatment preconditions. If a program is telling you to complete rehab before getting housed, it's not Housing First — ask for alternatives.",
      "Permanent supportive housing has the longest wait lists but is the most stable end state. It's the gold standard for chronic homelessness.",
      "If you're a veteran, ask specifically about HUD-VASH. It's typically much faster than civilian voucher programs.",
    ],
    related: [
      { slug: "what-actually-works", title: "What actually works: Housing First" },
      { slug: "if-you-become-homeless", title: "What to do if you become homeless" },
      { slug: "homelessness-by-population", title: "Homelessness by population" },
    ],
  },
  {
    slug: "day-services",
    matchServices: ["day-services", "showers", "laundry", "mail"],
    title: "Day centers: showers, laundry, mail, charging, Wi-Fi",
    shortTitle: "Day centers",
    hero: "Daytime drop-in centers with the basics: showers, laundry, mail, Wi-Fi, and case managers who know the local system.",
    intro:
      "Day shelters (also called drop-in centers or hospitality centers) are open during the day to anyone who needs a safe place, a shower, laundry, or just somewhere to charge a phone and sit. Most don't require ID or appointments. They are often the first stop for people new to homelessness because the staff usually know every other resource in the city.",
    tips: [
      "Day centers can usually act as your mailing address. Ask intake.",
      "Many have lockers or storage rooms for the day. Saves you carrying everything around.",
      "Most have a sign-up sheet for showers and laundry. Arrive early.",
      "The case managers at day centers are usually the most up-to-date on which shelters have beds tonight.",
      "Some have specific service days (e.g., 'Tuesday is haircut day,' 'Thursday is ID-replacement day'). Check the schedule.",
    ],
    related: [
      { slug: "daily-survival-guide", title: "Daily survival guide" },
      { slug: "if-you-become-homeless", title: "What to do if you become homeless" },
    ],
  },
  {
    slug: "addiction-recovery",
    matchServices: ["addiction-recovery", "harm-reduction"],
    title: "Addiction recovery and harm-reduction services",
    shortTitle: "Recovery & harm reduction",
    hero: "Treatment programs, detox, and harm-reduction services — including options that don't require sobriety to enter.",
    intro:
      "Substance-use services range from full residential treatment (28-day, 90-day, or longer programs) to outpatient counseling to harm-reduction sites that provide clean supplies, naloxone, and safe-use education. Not every program requires sobriety to enter — Housing First and harm-reduction philosophies hold that stable housing improves treatment outcomes, not the reverse.",
    tips: [
      "If you're using and not ready to stop, harm reduction is the safer choice. Programs like Insite (Vancouver), RainCity Housing, HIPS (DC), and many syringe exchanges provide supplies, naloxone, and overdose-prevention support without requiring sobriety.",
      "SAMHSA National Helpline (1-800-662-4357) is free, 24/7, English & Spanish. They'll find treatment in your area.",
      "Medication-assisted treatment (methadone, buprenorphine, naltrexone) has the strongest evidence for opioid use disorder. Some programs are now low-barrier — they don't require detox first.",
      "Many shelters provide on-site recovery programming. Some require sobriety; some don't. Ask.",
      "If you've overdosed or you're worried about a friend, naloxone (Narcan) is free at most syringe exchanges and many pharmacies — no prescription needed.",
    ],
    related: [
      { slug: "mental-illness-and-homelessness", title: "Mental illness and homelessness" },
      { slug: "what-actually-works", title: "What actually works: Housing First" },
    ],
  },
  {
    slug: "mental-health",
    matchServices: ["mental-health"],
    title: "Mental health services for unhoused people",
    shortTitle: "Mental health",
    hero: "Crisis lines, drop-in mental-health centers, and integrated behavioral-health programs.",
    intro:
      "Mental-health services for unhoused people are most effective when integrated with housing — care delivered at a day center, shelter, or supportive-housing unit rather than at a clinic the person has to travel to. The resources below include crisis lines, drop-in centers, and provider networks that meet people where they are.",
    tips: [
      "988 is the US & Canada crisis line. Free, 24/7. Press 1 for the Veterans Crisis Line.",
      "Mobile crisis teams (in many US cities) respond to mental-health emergencies without sending police. Ask 211 or your local CoC.",
      "Trans Lifeline (1-877-565-8860) is staffed by trans operators. Trevor Project (1-866-488-7386) serves LGBTQ+ youth.",
      "Many day shelters have on-site case managers and licensed therapists. They can refer you to longer-term care.",
      "Medicaid (US) or provincial health (Canada) covers mental-health services — apply for benefits even if you don't need them immediately.",
    ],
    related: [
      { slug: "mental-illness-and-homelessness", title: "Mental illness and homelessness" },
      { slug: "homelessness-by-population", title: "Homelessness by population" },
    ],
  },
  {
    slug: "outreach",
    matchServices: ["outreach"],
    title: "Street outreach teams",
    shortTitle: "Street outreach",
    hero: "Teams that come to you — find encampments, deliver supplies, build relationships, and connect people to housing.",
    intro:
      "Street outreach teams are the front line of the homeless-services system. They walk encampments, transit stations, and parks; deliver water, food, and naloxone; and build the trust that's a prerequisite for housing placement. Most operate through nonprofits or city contracts. Many welcome volunteers — though always after training.",
    tips: [
      "If you see someone in distress who appears unhoused, calling 211 to dispatch outreach is usually better than calling police.",
      "If you want to volunteer with an outreach team, start by emailing them. They want committed volunteers, not drop-ins.",
      "Outreach work is slow. Don't expect 'success' in single encounters — the goal is relationship over months and years.",
      "If you're unhoused and want to be reached by outreach, hanging around day centers makes you easier to find.",
    ],
    related: [
      { slug: "where-people-congregate", title: "Where unhoused people tend to be — and why" },
      { slug: "encampments-and-sweeps", title: "Encampments and why sweeps don't work" },
    ],
  },
];

export function getAllServiceProfiles(): ServiceProfile[] {
  return PROFILES;
}

export function getServiceProfile(slug: string): ServiceProfile | undefined {
  return PROFILES.find((p) => p.slug === slug);
}
