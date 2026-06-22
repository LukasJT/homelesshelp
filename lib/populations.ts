import type { Population } from "./shelters";

export interface PopulationProfile {
  slug: string;
  population: Population;
  title: string;
  shortTitle: string;
  hero: string;
  intro: string;
  hotlines: { label: string; number: string; description: string; country: "US" | "CA" | "BOTH" }[];
  charities: { name: string; url: string; description: string }[];
  tips: string[];
  relatedArticles: { slug: string; title: string }[];
}

const PROFILES: PopulationProfile[] = [
  {
    slug: "youth",
    population: "youth",
    shortTitle: "Youth",
    title: "Homeless youth resources (under 25)",
    hero: "Resources for young people experiencing homelessness — shelters, drop-in centers, and crisis lines that won't tell your parents.",
    intro:
      "Roughly 4.2 million young people in the US and 35,000+ in Canada experience some form of homelessness each year. The single largest cause is family rejection or conflict. LGBTQ+ youth are dramatically overrepresented — they make up about 7% of the under-25 population and roughly 40% of homeless youth. The resources below are youth-specific and most are LGBTQ+ affirming.",
    hotlines: [
      {
        label: "National Runaway Safeline (US)",
        number: "1-800-786-2929",
        description: "Free, 24/7, confidential. They won't call your parents without your permission.",
        country: "US",
      },
      {
        label: "Kids Help Phone (Canada)",
        number: "1-800-668-6868",
        description: "Free, 24/7, bilingual. Text CONNECT to 686868.",
        country: "CA",
      },
      {
        label: "Trevor Project (LGBTQ+ under 25)",
        number: "1-866-488-7386",
        description: "Free, 24/7. Crisis support for LGBTQ+ young people.",
        country: "BOTH",
      },
      {
        label: "Covenant House NINELINE",
        number: "1-800-999-9999",
        description: "Crisis line for runaway and homeless youth. 24/7.",
        country: "BOTH",
      },
    ],
    charities: [
      {
        name: "Covenant House",
        url: "https://www.covenanthouse.org",
        description: "Largest youth-serving homelessness charity in North America. Shelters in 30+ cities.",
      },
      {
        name: "Ali Forney Center (NYC)",
        url: "https://www.aliforneycenter.org",
        description: "Largest LGBTQ+ youth-serving agency in the US.",
      },
      {
        name: "Larkin Street Youth Services (SF)",
        url: "https://larkinstreetyouth.org",
        description: "Drop-in, shelter, and transitional housing for ages 12–24.",
      },
      {
        name: "Eva's Place (Toronto)",
        url: "https://www.evas.ca",
        description: "Three youth shelters and transitional housing in Toronto.",
      },
    ],
    tips: [
      "If you're under 18 and have run away, most shelters will accept you without calling the police or your parents — laws vary by state but most have a 72-hour window before reporting is required.",
      "Drop-in centers (no overnight stay needed) are a good first stop. They often have showers, laundry, food, and case managers who know the local system.",
      "If you've aged out of foster care, the Family Unification Program (FUP) and Foster Youth to Independence (FYI) vouchers can get you housing. Your state foster-care agency is the starting point.",
      "Many youth shelters are LGBTQ+ affirming by default. If a particular shelter doesn't feel safe, ask the staff for a referral to one that does.",
    ],
    relatedArticles: [
      { slug: "if-you-become-homeless", title: "What to do if you become homeless" },
      { slug: "homelessness-by-population", title: "Homelessness by population" },
      { slug: "how-to-talk-to-someone", title: "How to talk to someone experiencing homelessness" },
    ],
  },
  {
    slug: "veterans",
    population: "veterans",
    shortTitle: "Veterans",
    title: "Resources for homeless veterans",
    hero: "If you served and are sleeping rough, on a friend's couch, or about to be — the VA and its partners can move quickly. Here's where to start.",
    intro:
      "About 35,000 US veterans experience homelessness on any given night — down from over 75,000 in 2009. That reduction is the largest sustained drop in any homeless subpopulation in modern history. It happened because the VA adopted Housing First and funded the HUD-VASH voucher program. If you're a veteran, you may qualify for VA programs that move much faster than the civilian system.",
    hotlines: [
      {
        label: "Veterans Crisis Line (US)",
        number: "988",
        description: "Dial 988, then press 1. Free, 24/7. Or text 838255.",
        country: "US",
      },
      {
        label: "National Call Center for Homeless Veterans (US)",
        number: "1-877-424-3838",
        description: "Free, 24/7. Direct VA-to-veteran line for housing and benefits.",
        country: "US",
      },
      {
        label: "VETS Canada",
        number: "1-888-228-3871",
        description: "Volunteer-run emergency assistance, outreach, and rehousing for Canadian veterans.",
        country: "CA",
      },
    ],
    charities: [
      {
        name: "National Coalition for Homeless Veterans (US)",
        url: "https://nchv.org",
        description: "Umbrella organization. Lobbies for HUD-VASH funding and coordinates local providers.",
      },
      {
        name: "Veterans Inc.",
        url: "https://www.veteransinc.org",
        description: "One of the largest providers of veteran-specific housing and employment in the country.",
      },
      {
        name: "VETS Canada",
        url: "https://vetscanada.org",
        description: "Emergency support and rehousing for homeless Canadian veterans.",
      },
      {
        name: "Operation Dignity (East Bay)",
        url: "https://www.operationdignity.org",
        description: "Veteran-led East Bay services provider — transitional and permanent housing.",
      },
    ],
    tips: [
      "Ask about HUD-VASH (US). It's a HUD rental voucher paired with VA case management — the most effective housing program for veterans, with multi-year retention rates over 80%.",
      "DD-214 is the key document. If you don't have it, the National Personnel Records Center can replace it (free) at archives.gov/veterans/military-service-records.",
      "Less-than-honorable discharges still qualify for many homeless-specific programs. Don't assume you're not eligible — call the VA hotline and ask.",
      "VA Supportive Services for Veteran Families (SSVF) provides emergency cash assistance for security deposits, utility arrears, and back rent — often within days.",
    ],
    relatedArticles: [
      { slug: "homelessness-by-population", title: "Homelessness by population" },
      { slug: "what-actually-works", title: "What actually works: Housing First" },
      { slug: "if-you-become-homeless", title: "What to do if you become homeless" },
    ],
  },
  {
    slug: "lgbtq",
    population: "lgbtq",
    shortTitle: "LGBTQ+",
    title: "LGBTQ+ affirming shelters and resources",
    hero: "Shelters and resources that are explicitly LGBTQ+ affirming, plus crisis lines staffed by people who get it.",
    intro:
      "LGBTQ+ people are overrepresented at every age of homelessness. Among youth, an estimated 40% of homeless young people are LGBTQ+ — almost entirely because of family rejection after coming out. Transgender people in particular face high rates of housing discrimination and may be unsafe at faith-based or strictly gendered shelters. The resources below are explicitly affirming.",
    hotlines: [
      {
        label: "Trans Lifeline",
        number: "1-877-565-8860",
        description: "Crisis line staffed by trans operators. US: 1-877-565-8860. Canada: 1-877-330-6366.",
        country: "BOTH",
      },
      {
        label: "Trevor Project (LGBTQ+ under 25)",
        number: "1-866-488-7386",
        description: "Free, 24/7. Crisis support for LGBTQ+ young people. Text START to 678-678.",
        country: "BOTH",
      },
      {
        label: "LGBT National Hotline",
        number: "1-888-843-4564",
        description: "Confidential support and resource referrals.",
        country: "US",
      },
    ],
    charities: [
      {
        name: "Ali Forney Center (NYC)",
        url: "https://www.aliforneycenter.org",
        description: "Largest LGBTQ+ youth housing provider in the US.",
      },
      {
        name: "Los Angeles LGBT Center",
        url: "https://lalgbtcenter.org",
        description: "Largest LGBT center in the world. Youth housing, healthcare, mental health.",
      },
      {
        name: "Egale Centre (Toronto)",
        url: "https://egale.ca",
        description: "Canada's first LGBTQ+-specific homeless youth shelter.",
      },
      {
        name: "Morris Home (Philadelphia)",
        url: "https://www.rhd.org/program/morris-home",
        description: "First trans-specific behavioral health residence in the US.",
      },
    ],
    tips: [
      "If a shelter has been hostile, you don't have to go back. Ask intake at any drop-in center for a referral to an affirming shelter.",
      "Trans-specific shelters are rare but growing. The 519 (Toronto), Ali Forney (NYC), and Morris Home (Philly) are explicit. Many women's shelters are now trans-inclusive — they may not advertise it on the website but accept trans women.",
      "Save legal name and gender marker change paperwork digitally. If you lose physical copies, recovering them as an unhoused person is much harder.",
      "Atira (Vancouver), DEWC (Vancouver), and Sistering (Toronto) are explicitly trans-inclusive women's drop-ins / shelters in Canada.",
    ],
    relatedArticles: [
      { slug: "homelessness-by-population", title: "Homelessness by population" },
      { slug: "common-myths", title: "Common myths about homelessness" },
      { slug: "if-you-become-homeless", title: "What to do if you become homeless" },
    ],
  },
  {
    slug: "families",
    population: "families",
    shortTitle: "Families",
    title: "Resources for families with children",
    hero: "Family-specific shelters keep parents and kids together, often with private rooms and on-site childcare.",
    intro:
      "Roughly a third of the US homeless population is families with children. The cause is almost always one of two things — loss of a job or wage, or leaving a domestic-violence situation. Family homelessness is usually transitional: a single short episode followed by rehousing. The most effective response is rapid rehousing (a short rental subsidy plus housing-search help). Many family shelters have wait lists; 211 or a coordinated-entry intake is the fastest way in.",
    hotlines: [
      {
        label: "211",
        number: "211",
        description: "Free, 24/7. Knows family-specific shelter availability in your area code.",
        country: "BOTH",
      },
      {
        label: "National Domestic Violence Hotline",
        number: "1-800-799-7233",
        description: "If you're leaving an unsafe partner. Free, 24/7. Text START to 88788.",
        country: "US",
      },
      {
        label: "Childhelp National Child Abuse Hotline",
        number: "1-800-422-4453",
        description: "Free, 24/7, confidential support for child-safety concerns.",
        country: "US",
      },
    ],
    charities: [
      {
        name: "Family Promise",
        url: "https://familypromise.org",
        description: "200+ affiliates in the US providing emergency shelter and rapid rehousing for families.",
      },
      {
        name: "Win NYC",
        url: "https://winnyc.org",
        description: "Largest provider of family shelter in NYC.",
      },
      {
        name: "Hamilton Families (SF)",
        url: "https://hamiltonfamilies.org",
        description: "SF's largest family-specific provider — emergency, transitional, permanent housing.",
      },
      {
        name: "UMOM (Phoenix)",
        url: "https://www.umom.org",
        description: "Largest family shelter in Arizona; 170 family rooms.",
      },
      {
        name: "Inn from the Cold (Calgary)",
        url: "https://innfromthecold.org",
        description: "Calgary's largest family shelter.",
      },
    ],
    tips: [
      "Tell the school as soon as you've lost housing (or can see you will). Federal McKinney-Vento law (US) guarantees kids the right to stay at their original school with district-provided transportation. The school has a homeless liaison.",
      "Being homeless is not in itself a reason for CPS / child welfare involvement. Family shelters and service providers know this. Don't avoid services out of fear of losing your kids.",
      "Rapid rehousing (3–12 months of rent subsidy + help finding a unit) is the highest-leverage program for families. Ask coordinated entry about it specifically.",
      "If you're fleeing domestic violence, DV shelters have separate admission processes and faster entry. The address is usually confidential — call ahead, do not just show up.",
    ],
    relatedArticles: [
      { slug: "homelessness-by-population", title: "Homelessness by population" },
      { slug: "what-actually-works", title: "What actually works: Housing First" },
      { slug: "if-you-become-homeless", title: "What to do if you become homeless" },
    ],
  },
  {
    slug: "women",
    population: "women",
    shortTitle: "Women",
    title: "Resources for women experiencing homelessness",
    hero: "Women-specific shelters, day centers, and crisis lines — including for women fleeing domestic violence.",
    intro:
      "Women experiencing homelessness face significantly elevated rates of sexual assault and violence on the street, which is one reason many women avoid mixed-gender shelters. Many women's shelters are explicit about being trans-inclusive. The most common precipitating event for women is leaving an abusive partner.",
    hotlines: [
      {
        label: "National Domestic Violence Hotline (US)",
        number: "1-800-799-7233",
        description: "Free, 24/7. Text START to 88788. Chat at thehotline.org.",
        country: "US",
      },
      {
        label: "Assaulted Women's Helpline (Ontario)",
        number: "1-866-863-0511",
        description: "Free, 24/7. Other provinces have their own lines — 211 will route you.",
        country: "CA",
      },
      {
        label: "211",
        number: "211",
        description: "Free, 24/7. Knows women's shelter availability in your area code.",
        country: "BOTH",
      },
    ],
    charities: [
      {
        name: "National Network to End Domestic Violence (US)",
        url: "https://nnedv.org",
        description: "Operates the national hotline and supports DV shelters in every state.",
      },
      {
        name: "Rosie's Place (Boston)",
        url: "https://www.rosiesplace.org",
        description: "First women-only shelter in the US.",
      },
      {
        name: "Downtown Women's Center (LA)",
        url: "https://downtownwomenscenter.org",
        description: "Only LA organization focused exclusively on women experiencing homelessness.",
      },
      {
        name: "Cornerstone Housing for Women (Ottawa)",
        url: "https://cornerstonewomen.ca",
        description: "Ottawa's only emergency shelter exclusively for women.",
      },
    ],
    tips: [
      "If you're leaving DV, call the DV hotline first — they coordinate emergency placement separately from coordinated entry, and the address is usually confidential.",
      "Most women's shelters now serve trans women. If unsure, ask before you go.",
      "Day shelters (Rose Haven Portland, Sistering Toronto, etc.) are often a safer first stop than mixed-gender night shelters.",
      "Survivors of trafficking are eligible for specific protections and visas in the US. Polaris Project (1-888-373-7888) is the national hotline.",
    ],
    relatedArticles: [
      { slug: "homelessness-by-population", title: "Homelessness by population" },
      { slug: "if-you-become-homeless", title: "What to do if you become homeless" },
    ],
  },
  {
    slug: "indigenous",
    population: "indigenous",
    shortTitle: "Indigenous",
    title: "Resources for Indigenous people experiencing homelessness",
    hero: "Indigenous-led shelters, cultural programming, and culturally-specific services across Turtle Island.",
    intro:
      "Indigenous people are dramatically overrepresented in the homeless population in both the US and Canada. In Canada, Indigenous people make up about 5% of the general population but roughly 30% of the homeless population. The drivers are systemic — the legacy of residential schools and the Sixties Scoop in Canada, boarding schools in the US, ongoing discrimination, and long-term displacement from traditional lands. Indigenous-led programs tend to outperform generalist programs for this community.",
    hotlines: [
      {
        label: "211",
        number: "211",
        description: "Free, 24/7. Most regions can route to Indigenous-specific services.",
        country: "BOTH",
      },
      {
        label: "Hope for Wellness Helpline (Canada)",
        number: "1-855-242-3310",
        description: "Free, 24/7. Counselling for Indigenous people in English, French, Cree, Ojibway, and Inuktitut.",
        country: "CA",
      },
      {
        label: "Talking Stick (Canada)",
        number: "Chat at talkingstick.ca",
        description: "Free, anonymous chat for Indigenous youth.",
        country: "CA",
      },
    ],
    charities: [
      {
        name: "Siloam Mission (Winnipeg)",
        url: "https://siloam.ca",
        description: "Largest shelter in Manitoba; Indigenous-led programming.",
      },
      {
        name: "Na-Me-Res / Native Men's Residence (Toronto)",
        url: "https://nameres.org",
        description: "Indigenous-led men's shelter with traditional cultural programming.",
      },
      {
        name: "Native American Connections (Phoenix)",
        url: "https://www.nativeconnections.org",
        description: "Culturally specific housing and recovery for Native communities.",
      },
      {
        name: "Aboriginal Front Door (Vancouver)",
        url: "https://aboriginalfrontdoor.com",
        description: "Indigenous-led drop-in centre in the Downtown Eastside.",
      },
      {
        name: "Our Place Society (Victoria)",
        url: "https://www.ourplacesociety.com",
        description: "Indigenous programming alongside Victoria's main day center.",
      },
    ],
    tips: [
      "Indigenous-led organizations often have better outcomes for Indigenous community members than generalist shelters. The map filter for 'Indigenous' surfaces them.",
      "If you're status (Canada) or enrolled (US), tribal/band membership opens additional housing programs through the federal government.",
      "Friendship Centres (Canada) are present in every province and provide many of the same wraparound services as shelters — case management, meals, cultural programs.",
      "In the US, the Indian Housing Block Grant funds tribal housing authorities. If you have tribal enrollment, contact your tribe's housing authority directly.",
    ],
    relatedArticles: [
      { slug: "homelessness-by-population", title: "Homelessness by population" },
      { slug: "causes-of-homelessness", title: "The actual causes of homelessness" },
      { slug: "what-actually-works", title: "What actually works: Housing First" },
    ],
  },
];

export function getAllPopulationProfiles(): PopulationProfile[] {
  return PROFILES;
}

export function getPopulationProfile(slug: string): PopulationProfile | undefined {
  return PROFILES.find((p) => p.slug === slug);
}
