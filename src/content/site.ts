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
  title: 'Founding engineer at Fleet Health',
  location: 'New York, via Sydney',
  email: '', // Optional. Leave empty to hide. If set, it is public and will get scraped.
  emoji: '🍊',
};

export const company = {
  name: 'Fleet Health',
  url: 'https://fleethealth.com',
  role: 'Founding engineer',
  blurb:
    'Data platforms that run inside hospital networks, so patient data never has to leave the building.',
};

/** Paragraphs may contain <a> tags. Keep it to links only. */
export const about: string[] = [
  `I'm Harry (Haz). I'm a founding engineer at <a href="${company.url}">Fleet Health</a>, where we build data platforms that run inside hospital networks, so patient data never has to leave the building. Most days I work across the whole stack: React and Next.js on the front, Python and FastAPI on the back, Azure underneath, and a lot of SQL against EHR systems like Epic and eClinicalWorks.`,
  `I grew up in Sydney and live in New York now. Before Fleet I was at Canva, where I saw up close what happens to a company, and the people in it, when it grows fast.`,
  `Outside work I write essays at <a href="https://harryisthinking.substack.com">harryisthinking</a> on Substack, mostly about moving countries, how people treat each other, and why being certain is overrated. I also like data visualisation, etymology, and tennis.`,
];

export type WorkItem = {
  title: string;
  description: string;
  url?: string;
  year?: string;
};

export const recentWork: WorkItem[] = [
  // TODO: add items. Example shape:
  // { title: 'Project name', description: 'One line on what it is and why it mattered.', url: 'https://...', year: '2026' },
];

export type Talk = {
  title: string;
  event: string;
  date: string; // ISO date, e.g. '2026-03-14'. Used for sorting and display.
  location?: string;
  slides?: string;
  video?: string;
};

export const talks: Talk[] = [
  // TODO: add talks. Example shape:
  // { title: 'Talk title', event: 'Conference name', date: '2026-03-14', location: 'New York', slides: 'https://...', video: 'https://...' },
];

export type LinkItem = {
  label: string; // what it is
  handle: string; // what's shown as the link text
  url: string;
  note?: string;
};

export const writing: LinkItem[] = [
  {
    label: 'Substack',
    handle: 'harryisthinking',
    url: 'https://harryisthinking.substack.com',
    note: 'Essays on moving countries, how people treat each other, and why being certain is overrated.',
  },
  // TODO: zine. Example shape:
  // { label: 'Zine', handle: 'name', url: 'https://...', note: 'One line on what it is.' },
];

export const contact: LinkItem[] = [
  { label: 'Book a time', handle: 'cal.com/harry-archer', url: 'https://cal.com/harry-archer' },
  ...(person.email ? [{ label: 'Email', handle: person.email, url: `mailto:${person.email}` }] : []),
  { label: 'GitHub', handle: 'merylstreep', url: 'https://github.com/merylstreep' },
  { label: 'LinkedIn', handle: 'harry-z', url: 'https://www.linkedin.com/in/harry-z/' },
];

export const meta = {
  title: `Harry Zhang`,
  description: `${person.name}, ${person.title.toLowerCase()}. Work, talks, and writing.`,
};
