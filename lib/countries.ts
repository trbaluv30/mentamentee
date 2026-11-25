// Every country we can serve, named in English by the runtime (no data file to ship:
// lists are rendered on the server, so this costs the browser nothing).
// Open to all regions: South Asia, South-East Asia, Africa, MENA, Latin America and the Caribbean.
//
// Not listed: countries under comprehensive US sanctions (Cuba, Iran, North Korea, Syria).
// A US-based LLC cannot provide paid services there. Revisit with counsel (blueprint 7.5.6).

import type { Option } from "./options";

const CODES =
  "AD AE AF AG AI AL AM AO AR AS AT AU AW AZ BA BB BD BE BF BG BH BI BJ BM BN BO BR BS BT BW BY BZ CA CD CF CG CH CI CK CL CM CN CO CR CV CW CY CZ DE DJ DK DM DO DZ EC EE EG ER ES ET FI FJ FM FR GA GB GD GE GH GM GN GQ GR GT GU GW GY HK HN HR HT HU ID IE IL IN IQ IS IT JM JO JP KE KG KH KI KM KN KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MG MH MK ML MM MN MO MR MS MT MU MV MW MX MY MZ NA NE NG NI NL NO NP NR NZ OM PA PE PG PH PK PL PR PS PT PW PY QA RO RS RU RW SA SB SC SD SE SG SI SK SL SM SN SO SR SS ST SV SX SZ TC TD TG TH TJ TL TM TN TO TR TT TV TW TZ UA UG US UY UZ VC VE VG VI VN VU WS XK YE ZA ZM ZW".split(
    " ",
  );

const OVERRIDES: Record<string, string> = {
  CD: "Democratic Republic of the Congo",
  CG: "Republic of the Congo",
  PS: "Palestine",
  HK: "Hong Kong",
  MO: "Macau",
};

const names = new Intl.DisplayNames(["en"], { type: "region" });

export const ALL_COUNTRIES: Option[] = CODES.map((value) => ({
  value,
  label: OVERRIDES[value] ?? names.of(value) ?? value,
})).sort((a, b) => a.label.localeCompare(b.label, "en"));

/** Shown first in dropdowns: where most of our early users come from. */
const POPULAR = ["IN", "PK", "BD", "NP", "LK", "PH", "NG", "KE", "GH", "EG", "AE", "SA", "BR", "JM"];
export const POPULAR_COUNTRIES: Option[] = POPULAR.map((c) => ALL_COUNTRIES.find((o) => o.value === c)!).filter(Boolean);

export const COUNTRY_CODES = new Set(CODES);
export const countryName = (code: string) => ALL_COUNTRIES.find((c) => c.value === code)?.label ?? code;
