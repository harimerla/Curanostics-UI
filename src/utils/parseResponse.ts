import { ParsedSection } from '../types/api';

export const parseStructuredResponse = (response: string): ParsedSection[] => {
  const sections = response.trim().split('\n');
  return sections.map(section => {
    const match = section.match(/{heading: '(.+)', content: '(.+)'}/);
    if (!match) return { heading: '', content: '' };
    return {
      heading: match[1],
      content: match[2]
    };
  }).filter(section => section.heading !== '');
};