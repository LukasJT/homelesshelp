export interface Region {
  code: string;
  name: string;
  country: "US" | "CA";
  pit2023?: number;
  hudCocLink?: string;
  // State/province context notes (programs, recent legislation, etc.)
  programNote?: string;
  notes?: string;
}

// Approximate 2023 HUD AHAR figures, rounded. Cite the primary source in academic work.
const US_REGIONS: Region[] = [
  {
    code: "CA",
    name: "California",
    country: "US",
    pit2023: 181400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=CA&program=CoC",
    programNote:
      "California has roughly 28% of the US homeless population in ~12% of the US population. Major state programs include the Homeless Housing, Assistance and Prevention (HHAP) grant, the Behavioral Health Bridge Housing program, and Project Homekey (hotel/motel conversions). LA, SF, Oakland, San Diego, San Jose, and Sacramento all run their own Continuum of Care systems.",
  },
  {
    code: "NY",
    name: "New York",
    country: "US",
    pit2023: 103200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NY&program=CoC",
    programNote:
      "New York is the only US state with a constitutional 'right to shelter' (1981 Callahan consent decree, applies to NYC). This produces a much higher sheltered share than the national average; unsheltered counts are correspondingly lower. NYC Department of Homeless Services manages ~80,000 people in shelter on a given night.",
  },
  {
    code: "FL",
    name: "Florida",
    country: "US",
    pit2023: 30800,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=FL&program=CoC",
    programNote:
      "Florida passed HB 1365 in 2024 banning public camping statewide. The state has 27 Continua of Care; major urban concentrations in Miami-Dade, Tampa Bay, Orlando, Jacksonville. Hurricane displacement is a recurring driver.",
  },
  {
    code: "WA",
    name: "Washington",
    country: "US",
    pit2023: 28000,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=WA&program=CoC",
    programNote:
      "Washington consistently ranks in the top 5 states for unsheltered homelessness rate, driven by housing costs in the Puget Sound region. The state Department of Commerce administers the Consolidated Homeless Grant. King County's regional approach was restructured in 2022 with the King County Regional Homelessness Authority.",
  },
  {
    code: "TX",
    name: "Texas",
    country: "US",
    pit2023: 27400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=TX&program=CoC",
    programNote:
      "Houston has the strongest US case study of Built for Zero methodology, reducing unsheltered homelessness by ~60% from 2011 to 2022. Texas banned public camping statewide in 2021 (HB 1925). Major homeless populations: Houston, Dallas, Austin, San Antonio.",
  },
  {
    code: "OR",
    name: "Oregon",
    country: "US",
    pit2023: 20100,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=OR&program=CoC",
    programNote:
      "Oregon has one of the highest per-capita unsheltered homelessness rates in the US. The Multnomah County / Portland response has been politically contested through multiple administrations. Governor Kotek declared a homelessness state of emergency in 2023.",
  },
  {
    code: "MA",
    name: "Massachusetts",
    country: "US",
    pit2023: 19100,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MA&program=CoC",
    programNote:
      "Massachusetts is one of two US states with a state right-to-shelter for families (1983 Bridges v. Connecticut General Statutes precedent and successor state law). Recent migrant-arrival pressure has strained the family shelter system to its statutory cap.",
  },
  {
    code: "PA",
    name: "Pennsylvania",
    country: "US",
    pit2023: 14500,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=PA&program=CoC",
    programNote:
      "Philadelphia, Pittsburgh, and Allegheny County run separate Continua of Care. Project HOME in Philadelphia is one of the country's most-studied Housing First providers.",
  },
  {
    code: "CO",
    name: "Colorado",
    country: "US",
    pit2023: 14400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=CO&program=CoC",
    programNote:
      "Denver's Social Impact Bond was an early US pay-for-success Housing First experiment. Colorado Coalition for the Homeless is a leading statewide provider with on-site healthcare.",
  },
  {
    code: "AZ",
    name: "Arizona",
    country: "US",
    pit2023: 14200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=AZ&program=CoC",
    programNote:
      "Phoenix has the largest single-encampment homelessness presence (the Zone) in the Southwest, periodically cleared by court order. CASS is the region's largest single-adult shelter; UMOM is the largest family shelter.",
  },
  {
    code: "IL",
    name: "Illinois",
    country: "US",
    pit2023: 12000,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=IL&program=CoC",
    programNote:
      "Chicago Department of Family and Support Services administers the citywide CoC. Major providers include Pacific Garden Mission, Heartland Alliance, Inspiration Corp, A Safe Haven, and Sarah's Circle.",
  },
  {
    code: "GA",
    name: "Georgia",
    country: "US",
    pit2023: 10700,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=GA&program=CoC",
    programNote:
      "Atlanta's homelessness reduction work has been led by Partners for HOME (the regional CoC) and the Atlanta Mission. Mercy Care provides healthcare-for-the-homeless at multiple sites.",
  },
  {
    code: "OH",
    name: "Ohio",
    country: "US",
    pit2023: 10700,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=OH&program=CoC",
    programNote:
      "Columbus is one of the few large US cities to have reduced veteran homelessness to functional zero. Cleveland and Cincinnati run separate Continua of Care.",
  },
  {
    code: "NJ",
    name: "New Jersey",
    country: "US",
    pit2023: 10400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NJ&program=CoC",
    programNote:
      "Bergen County achieved functional zero for chronic homelessness in 2017, one of the earliest US Built for Zero successes. New Jersey 211 is well-developed and a useful first call.",
  },
  {
    code: "NC",
    name: "North Carolina",
    country: "US",
    pit2023: 9200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NC&program=CoC",
    programNote:
      "Charlotte (Roof Above) and Raleigh-Durham run major shelter systems. The state has nine CoCs and a state-level Council on Homelessness within the Department of Health and Human Services.",
  },
  {
    code: "TN",
    name: "Tennessee",
    country: "US",
    pit2023: 9200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=TN&program=CoC",
    programNote:
      "Tennessee passed one of the first US state-level criminalization-of-camping statutes in 2022 (HB 978). Nashville and Memphis have separate CoCs.",
  },
  {
    code: "MI",
    name: "Michigan",
    country: "US",
    pit2023: 8200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MI&program=CoC",
    programNote:
      "Detroit's Detroit Rescue Mission Ministries operates multiple campuses. The Michigan Coalition Against Homelessness is the statewide convener.",
  },
  {
    code: "MN",
    name: "Minnesota",
    country: "US",
    pit2023: 8200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MN&program=CoC",
    programNote:
      "Minneapolis and St. Paul run separate CoCs but coordinate via the Suburban Hennepin CoC. The Minnesota Coalition for the Homeless and the Department of Human Services co-administer state-level programs.",
  },
  {
    code: "MO",
    name: "Missouri",
    country: "US",
    pit2023: 6300,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MO&program=CoC",
    programNote:
      "Missouri passed a state-level criminalization-of-camping statute in 2022 (HB 1606). Major providers: St. Patrick Center (St. Louis), City Union Mission (KC).",
  },
  {
    code: "NV",
    name: "Nevada",
    country: "US",
    pit2023: 7900,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NV&program=CoC",
    programNote:
      "Clark County (Las Vegas) has the dominant homeless population. The Las Vegas Rescue Mission and Catholic Charities of Southern Nevada are the largest providers.",
  },
  {
    code: "HI",
    name: "Hawaii",
    country: "US",
    pit2023: 6200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=HI&program=CoC",
    programNote:
      "Hawaii has the highest per-capita homelessness rate of any US state, driven by the housing-cost gap. Native Hawaiians are dramatically overrepresented. IHS is the state's main shelter provider.",
  },
  {
    code: "VA",
    name: "Virginia",
    country: "US",
    pit2023: 6200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=VA&program=CoC",
    programNote:
      "Virginia was the first US state to achieve functional zero for veteran homelessness (2015). Continues to lead on Housing First implementation for vets.",
  },
  {
    code: "MD",
    name: "Maryland",
    country: "US",
    pit2023: 5600,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MD&program=CoC",
  },
  {
    code: "DC",
    name: "District of Columbia",
    country: "US",
    pit2023: 5100,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=DC&program=CoC",
    programNote:
      "DC is the only US jurisdiction with a fully right-to-shelter framework that includes single adults during hypothermia season. The TCP (Coordinated Assessment & Housing Placement) system was an early model adopted nationally.",
  },
  {
    code: "IN",
    name: "Indiana",
    country: "US",
    pit2023: 5400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=IN&program=CoC",
  },
  {
    code: "WI",
    name: "Wisconsin",
    country: "US",
    pit2023: 4800,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=WI&program=CoC",
  },
  {
    code: "LA",
    name: "Louisiana",
    country: "US",
    pit2023: 4500,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=LA&program=CoC",
    programNote:
      "New Orleans's UNITY of Greater New Orleans achieved a >70% reduction in homelessness post-Katrina via aggressive Housing First implementation.",
  },
  {
    code: "OK",
    name: "Oklahoma",
    country: "US",
    pit2023: 4400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=OK&program=CoC",
  },
  {
    code: "ME",
    name: "Maine",
    country: "US",
    pit2023: 4400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=ME&program=CoC",
    programNote:
      "Maine's family-shelter system was strained in 2023-24 by migrant arrivals. Preble Street and Maine State Housing Authority are the primary actors.",
  },
  {
    code: "KY",
    name: "Kentucky",
    country: "US",
    pit2023: 4200,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=KY&program=CoC",
  },
  {
    code: "NM",
    name: "New Mexico",
    country: "US",
    pit2023: 4000,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NM&program=CoC",
    programNote:
      "Albuquerque has had a notably high rate of unsheltered homelessness, particularly along the Coronado Park and railyards corridors. The state's per-capita rate has been rising.",
  },
  {
    code: "SC",
    name: "South Carolina",
    country: "US",
    pit2023: 3600,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=SC&program=CoC",
  },
  {
    code: "UT",
    name: "Utah",
    country: "US",
    pit2023: 3500,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=UT&program=CoC",
    programNote:
      "Utah was widely (sometimes inaccurately) cited as having 'ended chronic homelessness' in the 2010s. The reduction was real but partial and was reversed in the early 2020s as funding shifted.",
  },
  {
    code: "VT",
    name: "Vermont",
    country: "US",
    pit2023: 3500,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=VT&program=CoC",
    programNote:
      "Vermont had the highest per-capita PIT rate of any state in 2023, largely driven by motel-based emergency shelter that was counted explicitly.",
  },
  {
    code: "AL",
    name: "Alabama",
    country: "US",
    pit2023: 3300,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=AL&program=CoC",
  },
  {
    code: "CT",
    name: "Connecticut",
    country: "US",
    pit2023: 3300,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=CT&program=CoC",
    programNote:
      "Connecticut was one of the first US states to achieve functional zero for chronic veteran homelessness. Columbus House and Journey Home are leading providers.",
  },
  {
    code: "IA",
    name: "Iowa",
    country: "US",
    pit2023: 2900,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=IA&program=CoC",
  },
  {
    code: "AR",
    name: "Arkansas",
    country: "US",
    pit2023: 2500,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=AR&program=CoC",
  },
  {
    code: "KS",
    name: "Kansas",
    country: "US",
    pit2023: 2500,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=KS&program=CoC",
  },
  {
    code: "NE",
    name: "Nebraska",
    country: "US",
    pit2023: 2400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NE&program=CoC",
  },
  {
    code: "NH",
    name: "New Hampshire",
    country: "US",
    pit2023: 2400,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NH&program=CoC",
  },
  {
    code: "ID",
    name: "Idaho",
    country: "US",
    pit2023: 2300,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=ID&program=CoC",
  },
  {
    code: "AK",
    name: "Alaska",
    country: "US",
    pit2023: 2100,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=AK&program=CoC",
    programNote:
      "Alaska has unique climate-driven challenges; unsheltered survival is dramatically harder for ~8 months of the year. Anchorage's Brother Francis Shelter is the largest low-barrier shelter.",
  },
  {
    code: "MT",
    name: "Montana",
    country: "US",
    pit2023: 1800,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MT&program=CoC",
  },
  {
    code: "RI",
    name: "Rhode Island",
    country: "US",
    pit2023: 1800,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=RI&program=CoC",
  },
  {
    code: "WV",
    name: "West Virginia",
    country: "US",
    pit2023: 1500,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=WV&program=CoC",
  },
  {
    code: "DE",
    name: "Delaware",
    country: "US",
    pit2023: 1300,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=DE&program=CoC",
  },
  {
    code: "SD",
    name: "South Dakota",
    country: "US",
    pit2023: 1300,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=SD&program=CoC",
  },
  {
    code: "MS",
    name: "Mississippi",
    country: "US",
    pit2023: 1100,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MS&program=CoC",
  },
  {
    code: "ND",
    name: "North Dakota",
    country: "US",
    pit2023: 700,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=ND&program=CoC",
  },
  {
    code: "WY",
    name: "Wyoming",
    country: "US",
    pit2023: 600,
    hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=WY&program=CoC",
  },
];

const CA_REGIONS: Region[] = [
  {
    code: "ON",
    name: "Ontario",
    country: "CA",
    notes: "Toronto alone reports ~10,500 single-night shelter use. Province-wide enumeration is partial.",
    programNote:
      "Ontario's federal Reaching Home funding flows through community entities like the Toronto Alliance to End Homelessness, the Region of Waterloo, and the City of Hamilton. The Province administers Ontario Works social-assistance.",
  },
  {
    code: "BC",
    name: "British Columbia",
    country: "CA",
    notes: "Greater Vancouver PIT count: ~4,800 (2023). Province conducts integrated counts every ~3 years.",
    programNote:
      "BC's Downtown Eastside in Vancouver concentrates the most visible homelessness in Canada. BC Housing operates province-wide; many supportive-housing buildings are co-managed with non-profits (Atira, RainCity, PHS Community Services).",
  },
  {
    code: "QC",
    name: "Quebec",
    country: "CA",
    notes: "Montreal PIT 2022: ~4,690. Province-wide enumeration is partial.",
    programNote:
      "Quebec uses the Plan d'action interministériel en itinérance to coordinate efforts. Major providers: Old Brewery Mission, Welcome Hall Mission, Maison du Père. French-language service infrastructure is well developed.",
  },
  {
    code: "AB",
    name: "Alberta",
    country: "CA",
    notes: "Calgary PIT 2024: ~2,900. Edmonton: ~2,800.",
    programNote:
      "Alberta was an early Canadian adopter of Housing First at provincial scale (the 7 Cities approach), reducing chronic homelessness substantially in the 2010s before later increases.",
  },
  {
    code: "MB",
    name: "Manitoba",
    country: "CA",
    notes: "Winnipeg PIT 2022: ~1,250 enumerated; Indigenous people dramatically overrepresented.",
    programNote:
      "Winnipeg's homelessness crisis is shaped by the legacy of residential schools, the Sixties Scoop, and ongoing systemic underfunding of Indigenous housing. End Homelessness Winnipeg is the regional coordinator.",
  },
  {
    code: "NS",
    name: "Nova Scotia",
    country: "CA",
    notes: "Halifax maintains a By-Names List of >1,000 people.",
    programNote:
      "Affordable Housing Association of Nova Scotia and the Halifax Mutual Aid Society operate housing and outreach. The province's Reaching Home funding flows through the regional CoC.",
  },
  {
    code: "SK",
    name: "Saskatchewan",
    country: "CA",
    notes: "Saskatoon PIT 2022: ~550.",
  },
  {
    code: "NB",
    name: "New Brunswick",
    country: "CA",
  },
  {
    code: "NL",
    name: "Newfoundland and Labrador",
    country: "CA",
  },
  {
    code: "PE",
    name: "Prince Edward Island",
    country: "CA",
  },
  {
    code: "YT",
    name: "Yukon",
    country: "CA",
  },
  {
    code: "NT",
    name: "Northwest Territories",
    country: "CA",
  },
  {
    code: "NU",
    name: "Nunavut",
    country: "CA",
    notes: "Iqaluit is the only community with year-round emergency shelter. Hidden homelessness is extreme — many in overcrowded housing.",
    programNote:
      "Nunavut has the most acute hidden-homelessness situation in Canada. Most people living in overcrowded or unsafe housing are not counted in any PIT. The territorial government's housing portfolio is severely under-funded relative to need.",
  },
];

const ALL = [...US_REGIONS, ...CA_REGIONS];

export function getAllRegions(): Region[] {
  return ALL;
}

export function getUsRegions(): Region[] {
  return US_REGIONS;
}

export function getCaRegions(): Region[] {
  return CA_REGIONS;
}

export function getRegion(country: "US" | "CA", code: string): Region | undefined {
  return ALL.find((r) => r.country === country && r.code === code.toUpperCase());
}
