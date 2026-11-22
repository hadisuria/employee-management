export const DUMMY_GROUPS = [
  'Information Technology',
  'Risk & Compliance',
  'Finance',
  'Operations',
  'Human Resource',
  'Legal',
  'Marketing',
  'Sales',
  'Customer Service',
  'Administration',
] as const;

export type DummyGroup = (typeof DUMMY_GROUPS)[number];
