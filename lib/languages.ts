export interface Lang {
  code: string;
  name: string;
  nativeName: string;
  // Where this language has notable speaker concentrations in North America
  contextNote?: string;
  // ISO 639-1 code for Google Translate (most match `code`)
  gtCode?: string;
}

// The big 3 — full first-class translations on our site.
export const FIRST_CLASS: Lang[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "fr", name: "French", nativeName: "Français" },
];

// 50+ additional widely-spoken languages in North America.
// These pages don't get hand-translated; we link to Google Translate
// auto-rendering the English live pages.
export const MACHINE_TRANSLATED: Lang[] = [
  { code: "zh-CN", gtCode: "zh-CN", name: "Mandarin (Simplified)", nativeName: "中文（简体）", contextNote: "Large communities in NYC, SF Bay, LA, Toronto, Vancouver." },
  { code: "zh-TW", gtCode: "zh-TW", name: "Mandarin (Traditional)", nativeName: "中文（繁體）", contextNote: "Traditional-script communities, especially Taiwanese diaspora." },
  { code: "yue", gtCode: "yue", name: "Cantonese", nativeName: "粵語", contextNote: "Long-established communities in SF, NYC, Toronto, Vancouver." },
  { code: "tl", gtCode: "tl", name: "Tagalog (Filipino)", nativeName: "Tagalog", contextNote: "Largest Filipino populations: LA, SF Bay, NYC, Vegas, Vancouver." },
  { code: "vi", gtCode: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", contextNote: "Major communities in CA, TX, WA, ON." },
  { code: "ar", gtCode: "ar", name: "Arabic", nativeName: "العربية", contextNote: "Detroit, NYC, LA, Toronto, Montreal." },
  { code: "ko", gtCode: "ko", name: "Korean", nativeName: "한국어", contextNote: "LA, NYC, Atlanta, Toronto." },
  { code: "ru", gtCode: "ru", name: "Russian", nativeName: "Русский", contextNote: "NYC (Brighton Beach), Toronto, Chicago." },
  { code: "de", gtCode: "de", name: "German", nativeName: "Deutsch" },
  { code: "ht", gtCode: "ht", name: "Haitian Creole", nativeName: "Kreyòl Ayisyen", contextNote: "Miami, NYC, Boston, Montreal." },
  { code: "pt", gtCode: "pt", name: "Portuguese", nativeName: "Português", contextNote: "Boston metro, Newark, Miami, Toronto." },
  { code: "it", gtCode: "it", name: "Italian", nativeName: "Italiano" },
  { code: "pl", gtCode: "pl", name: "Polish", nativeName: "Polski", contextNote: "Chicago, NYC, Toronto." },
  { code: "hi", gtCode: "hi", name: "Hindi", nativeName: "हिन्दी", contextNote: "Bay Area, NYC, Toronto, Vancouver." },
  { code: "ur", gtCode: "ur", name: "Urdu", nativeName: "اردو", contextNote: "NYC, Chicago, Toronto." },
  { code: "pa", gtCode: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", contextNote: "Vancouver, Toronto, Bay Area." },
  { code: "gu", gtCode: "gu", name: "Gujarati", nativeName: "ગુજરાતી", contextNote: "NJ, NYC, Toronto." },
  { code: "bn", gtCode: "bn", name: "Bengali", nativeName: "বাংলা", contextNote: "NYC, NJ, Toronto." },
  { code: "ta", gtCode: "ta", name: "Tamil", nativeName: "தமிழ்", contextNote: "Toronto, Bay Area." },
  { code: "te", gtCode: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "ml", gtCode: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "ja", gtCode: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "fa", gtCode: "fa", name: "Persian (Farsi)", nativeName: "فارسی", contextNote: "LA, Toronto." },
  { code: "ps", gtCode: "ps", name: "Pashto", nativeName: "پښتو" },
  { code: "el", gtCode: "el", name: "Greek", nativeName: "Ελληνικά" },
  { code: "he", gtCode: "iw", name: "Hebrew", nativeName: "עברית" },
  { code: "yi", gtCode: "yi", name: "Yiddish", nativeName: "ייִדיש", contextNote: "Brooklyn, Montreal." },
  { code: "hmn", gtCode: "hmn", name: "Hmong", nativeName: "Hmoob", contextNote: "Minneapolis-St. Paul, Fresno, Milwaukee." },
  { code: "km", gtCode: "km", name: "Khmer", nativeName: "ខ្មែរ", contextNote: "Long Beach, Lowell MA, Philadelphia." },
  { code: "lo", gtCode: "lo", name: "Lao", nativeName: "ລາວ" },
  { code: "th", gtCode: "th", name: "Thai", nativeName: "ไทย" },
  { code: "my", gtCode: "my", name: "Burmese", nativeName: "မြန်မာစာ" },
  { code: "id", gtCode: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
  { code: "ne", gtCode: "ne", name: "Nepali", nativeName: "नेपाली" },
  { code: "so", gtCode: "so", name: "Somali", nativeName: "Soomaali", contextNote: "Minneapolis, Seattle, Toronto." },
  { code: "am", gtCode: "am", name: "Amharic", nativeName: "አማርኛ", contextNote: "DC area, Seattle, Toronto." },
  { code: "ti", gtCode: "ti", name: "Tigrinya", nativeName: "ትግርኛ" },
  { code: "om", gtCode: "om", name: "Oromo", nativeName: "Afaan Oromoo" },
  { code: "sw", gtCode: "sw", name: "Swahili", nativeName: "Kiswahili" },
  { code: "yo", gtCode: "yo", name: "Yoruba", nativeName: "Yorùbá" },
  { code: "ig", gtCode: "ig", name: "Igbo", nativeName: "Igbo" },
  { code: "uk", gtCode: "uk", name: "Ukrainian", nativeName: "Українська", contextNote: "Toronto, Edmonton, NYC, Chicago." },
  { code: "ro", gtCode: "ro", name: "Romanian", nativeName: "Română" },
  { code: "hu", gtCode: "hu", name: "Hungarian", nativeName: "Magyar" },
  { code: "cs", gtCode: "cs", name: "Czech", nativeName: "Čeština" },
  { code: "tr", gtCode: "tr", name: "Turkish", nativeName: "Türkçe" },
  { code: "hy", gtCode: "hy", name: "Armenian", nativeName: "Հայերեն", contextNote: "Glendale CA, LA, Montreal." },
  { code: "sr", gtCode: "sr", name: "Serbian", nativeName: "Српски" },
  { code: "hr", gtCode: "hr", name: "Croatian", nativeName: "Hrvatski" },
  { code: "bg", gtCode: "bg", name: "Bulgarian", nativeName: "Български" },
  { code: "sq", gtCode: "sq", name: "Albanian", nativeName: "Shqip" },
];

// Optional Indigenous languages that have very limited (or no) Google Translate
// support but are important to acknowledge in a North American context.
export const INDIGENOUS: Lang[] = [
  { code: "nv", name: "Navajo / Diné Bizaad", nativeName: "Diné Bizaad", contextNote: "Largest Indigenous language in the US by speaker count (Navajo Nation)." },
  { code: "cr", name: "Cree", nativeName: "ᓀᐦᐃᔭᐍᐏᐣ Nēhiyawēwin", contextNote: "Widely spoken across Prairie Provinces and northern Quebec." },
  { code: "iu", name: "Inuktitut", nativeName: "ᐃᓄᒃᑎᑐᑦ", contextNote: "Nunavut and Nunavik (northern Quebec)." },
  { code: "oj", name: "Ojibwe / Anishinaabemowin", nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ Anishinaabemowin", contextNote: "Great Lakes region in US and Canada." },
  { code: "ik", name: "Inupiaq", nativeName: "Iñupiatun", contextNote: "Northern Alaska." },
  { code: "yi-AK", name: "Yup'ik", nativeName: "Yup'ik", contextNote: "Southwest Alaska." },
];

export function googleTranslateUrl(targetCode: string, urlPath: string = "/"): string {
  const target = encodeURIComponent(targetCode);
  const fullUrl = encodeURIComponent(`https://homelesshelp.net${urlPath}`);
  return `https://translate.google.com/translate?sl=en&tl=${target}&u=${fullUrl}`;
}
