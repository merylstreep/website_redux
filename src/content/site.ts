/**
 * All site copy and links live here. Edit this file, not the components.
 * Anything marked TODO is a placeholder waiting on real content.
 */

export const person = {
  name: 'Harry Zhang',
  altName: '张 Archer',
  title: 'Engineer at Fleet Technologies',
  location: 'Sydney', // TODO: confirm
  email: '', // TODO: optional. Leave empty to hide.
};

export const company = {
  name: 'Fleet Technologies',
  url: 'https://fleethealth.com',
  role: 'Engineer', // TODO: exact title
  // TODO: one line on what Fleet does and what you do there
  blurb: 'Building at Fleet.',
};

export const about: string[] = [
  // TODO: replace with your own words. Kept short on purpose.
  `I'm Harry, an engineer at Fleet Technologies. I build software, give the occasional talk, and write about the work as I go.`,
  `This site is the reference for what I'm doing professionally: current work, talks, and writing. It gets updated when something changes.`,
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
  // { title: 'Talk title', event: 'Conference name', date: '2026-03-14', location: 'Sydney', slides: 'https://...', video: 'https://...' },
];

export const writing = {
  substack: { label: 'Substack', url: '' }, // TODO: URL
  zine: { label: 'Zine', url: '' }, // TODO: URL
};

export const links = {
  cal: { label: 'Book a time', url: 'https://cal.com/harry-archer' },
  github: { label: 'GitHub', url: 'https://github.com/merylstreep' },
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/harry-z/' },
};

export const meta = {
  title: `${person.name} (${person.altName})`,
  description: `${person.name}, ${person.title.toLowerCase()}. Work, talks, and writing.`,
};
