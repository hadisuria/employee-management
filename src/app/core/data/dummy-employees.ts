import { Employee, EmployeeStatus } from '../models/employee.model';
import { DUMMY_GROUPS } from './dummy-groups';

interface NameSeed {
  firstName: string;
  lastName: string;
  group?: string;
  status?: EmployeeStatus;
  basicSalary?: number;
}

const FEATURED_SEEDS: readonly NameSeed[] = [
  {
    firstName: 'Budi',
    lastName: 'Santoso',
    group: 'Information Technology',
    status: 'Active',
  },
  {
    firstName: 'Siti',
    lastName: 'Rahmawati',
    group: 'Finance',
    status: 'Active',
  },
  {
    firstName: 'Andi',
    lastName: 'Wijaya',
    group: 'Operations',
    status: 'On Leave',
  },
  {
    firstName: 'Dewi',
    lastName: 'Lestari',
    group: 'Human Resource',
    status: 'Active',
  },
  {
    firstName: 'Rizky',
    lastName: 'Pratama',
    group: 'Risk & Compliance',
    status: 'Probation',
  },
  {
    firstName: 'Nadia',
    lastName: 'Putri',
    group: 'Marketing',
    status: 'Inactive',
  },
  {
    firstName: 'Hendra',
    lastName: 'Kusuma',
    group: 'Sales',
    status: 'Active',
  },
  {
    firstName: 'Ayu',
    lastName: 'Wulandari',
    group: 'Legal',
    status: 'Active',
  },
  {
    firstName: 'Fajar',
    lastName: 'Nugroho',
    group: 'Customer Service',
    status: 'Active',
  },
  {
    firstName: 'Tari',
    lastName: 'Permata',
    group: 'Administration',
    status: 'Probation',
  },
];

const FIRST_NAMES: readonly string[] = [
  'Budi',
  'Siti',
  'Andi',
  'Dewi',
  'Rizky',
  'Nadia',
  'Hendra',
  'Ayu',
  'Fajar',
  'Tari',
  'Dimas',
  'Rina',
  'Bagas',
  'Intan',
  'Yoga',
];

const LAST_NAMES: readonly string[] = [
  'Santoso',
  'Rahmawati',
  'Wijaya',
  'Lestari',
  'Pratama',
  'Putri',
  'Kusuma',
  'Wulandari',
  'Nugroho',
  'Permata',
  'Hidayat',
  'Saputra',
];

const STATUSES: readonly EmployeeStatus[] = [
  'Active',
  'Active',
  'On Leave',
  'Probation',
  'Inactive',
];

const RANDOM_NOTES: readonly string[] = [
  'Remote work approved',
  'Relocated from Surabaya branch',
  'Lead mentor for onboarding',
  'Cross-team rotation',
  'Contract renewal scheduled',
  'Hybrid schedule (Tue-Thu)',
  'Pending certification review',
  'Acting team lead',
  'Annual performance bonus eligible',
  'Part-time advisory role',
];

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function buildDateOnly(year: number, month: number, day: number): string {
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

export function generateDummyEmployees(count = 100): Employee[] {
  const usedUsernames = new Set<string>();
  const employees: Employee[] = [];

  for (let i = 0; i < count; i++) {
    const seed = FEATURED_SEEDS[i];
    const firstName = seed?.firstName ?? FIRST_NAMES[i % FIRST_NAMES.length];
    const lastName =
      seed?.lastName ?? LAST_NAMES[Math.floor(i / FIRST_NAMES.length) % LAST_NAMES.length];

    const baseUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
    let username = baseUsername;
    let suffix = 2;
    while (usedUsernames.has(username)) {
      username = `${baseUsername}${suffix}`;
      suffix++;
    }
    usedUsernames.add(username);

    const birthYear = 1980 + (i % 22);
    const birthMonth = (i % 12) + 1;
    const birthDay = (i % 28) + 1;
    const birthDate = buildDateOnly(birthYear, birthMonth, birthDay);

    const computedSalary = Math.round((6_000_000 + Math.random() * 20_000_000) * 100) / 100;
    const description =
      Math.random() < 0.72
        ? 'N/A'
        : RANDOM_NOTES[Math.floor(Math.random() * RANDOM_NOTES.length)];

    employees.push({
      username,
      firstName,
      lastName,
      email: `${username}@company.co.id`,
      birthDate,
      basicSalary: seed?.basicSalary ?? computedSalary,
      status: seed?.status ?? STATUSES[i % STATUSES.length],
      group: seed?.group ?? DUMMY_GROUPS[i % DUMMY_GROUPS.length],
      description,
    });
  }

  return employees;
}

export const DUMMY_EMPLOYEES: readonly Employee[] = generateDummyEmployees(100);
