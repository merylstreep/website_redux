/**
 * All site copy and links live here. Edit this file, not the components.
 * Anything marked TODO is a placeholder waiting on real content.
 *
 * Note: everything in this file is compiled into the public HTML.
 * Comments are stripped, but any string or URL you put here is visible to anyone.
 */

export const person = {
  name: 'Harry Zhang',
  altName: '张 Archer',
  nickname: 'Haz',
  title: 'Founding engineer at Fleet Technologies',
  location: 'New York, via Sydney',
  email: '', // Optional. Leave empty to hide. If set, it is public and will get scraped.
  emoji: '🍊',
};

export const company = {
  name: 'Fleet Technologies',
  url: 'https://fleethealth.com',
  role: 'Founding engineer',
  blurb: 'Platform products that harmonise and declutter noisy data at scale.',
};

/** Paragraphs may contain <a> tags. Keep it to links only. */
export const about: string[] = [
  `I'm Harry, my friends like to call me Haz. I'm a founding engineer at <a href="${company.url}">Fleet Technologies</a>, where we're building important platform products to harmonise and declutter noisy data on a massive scale. I'm typically across the whole stack, and the city. I like to roam.`,
  `I grew up in Sydney and live in New York now. Before Fleet, I was at Explo, a data visualisation startup where I built their AI platform from scratch, we got acquired by Omni as a result. Yay! And before that I was at Canva where I helped start AI Studio and built out their content management and help services.`,
  `Outside work I try to write and read. At the moment, I'm working on a regular zine release - so stay tuned! I also enjoy laying down in parks, physically demanding activities, and tennis.`,
];

export type Talk = {
  title: string; // the talk
  event: string; // the conference
  start: string; // ISO date, e.g. '2026-10-01'
  end?: string; // ISO date, for multi-day events
  location?: string;
  url?: string; // event page
  slides?: string;
  video?: string;
};

export const talks: Talk[] = [
  {
    title: 'Re-imagining the Cancer Registry: AI as a Partner to the Oncology Data Specialist',
    event: '40th Annual Kentucky Cancer Registry Advanced Oncology Data Specialists (ODS) Workshop',
    start: '2026-08-27',
    end: '2026-08-28',
  },
  {
    title: 'The Interpersonal Debt of Scale',
    event: 'Monktoberfest',
    start: '2026-10-01',
    end: '2026-10-02',
    location: 'Portland, Maine',
    url: 'https://monktoberfest.com',
  },
  {
    title: "Becoming a Founding Engineer: you're already ready!",
    event: 'DevFest Milano',
    start: '2026-10-10',
    location: 'Milan',
  },
  {
    title: 'Empowering Health Services to Save More Lives: A Cancer Casefinding Study',
    event: '26th Ci4CC Cancer Center Symposium & Workshop',
    start: '2026-11-06',
    end: '2026-11-08',
    location: 'Baltimore, Maryland',
    url: 'https://www.ci4cc.org/fall-2026-workshop',
  },
  {
    title: 'Agentic Flows in Production: The Failure Modes Nobody Warns You About',
    event: 'MLOps World',
    start: '2026-11-17',
    end: '2026-11-18',
    location: 'Austin, Texas',
    url: 'https://mlopsworld.com',
  },
  {
    title: 'Trust Starts Upstream: Why Real-World Evidence Lives or Dies on Data Quality',
    event: 'GIANT Health',
    start: '2026-12-07',
    end: '2026-12-08',
    location: 'London',
    url: 'https://www.giant.health',
  },
];

export type LinkItem = {
  label: string; // what it is
  handle: string; // what's shown as the link text
  url?: string; // omit while there's nothing to link to yet
  note?: string; // may contain <a> tags
};

const calUrl = 'https://cal.com/harry-archer';

export const writing: LinkItem[] = [
  {
    label: 'Substack',
    handle: 'harryisthinking',
    url: 'https://harryisthinking.substack.com',
    note: 'My inconsistent personal blog.',
  },
  {
    label: 'Zine',
    handle: 'Second Order 🚧',
    note: `A print zine about what today's technology sets in motion. If you want to get involved, or learn more <a href="${calUrl}">let's chat</a>!`,
  },
];

export const contact: LinkItem[] = [
  { label: 'Book a time', handle: 'cal.com/harry-archer', url: calUrl },
  ...(person.email ? [{ label: 'Email', handle: person.email, url: `mailto:${person.email}` }] : []),
  { label: 'GitHub', handle: 'merylstreep', url: 'https://github.com/merylstreep' },
  { label: 'LinkedIn', handle: 'just-harry', url: 'https://www.linkedin.com/in/just-harry/' },
];

export const meta = {
  title: `Harry Zhang`,
  description: `${person.name}, ${person.title.toLowerCase()}. Work, talks, and writing.`,
};
