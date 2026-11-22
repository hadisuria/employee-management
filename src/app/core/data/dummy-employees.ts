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
    basicSalary: 15_750_000.5,
  },
  {
    firstName: 'Siti',
    lastName: 'Rahmawati',
    group: 'Finance',
    status: 'Active',
    basicSalary: 14_200_000,
  },
  {
    firstName: 'Andi',
    lastName: 'Wijaya',
    group: 'Operations',
    status: 'On Leave',
    basicSalary: 18_500_000,
  },
  {
    firstName: 'Dewi',
    lastName: 'Lestari',
    group: 'Human Resource',
    status: 'Active',
    basicSalary: 12_500_000,
  },
  {
    firstName: 'Rizky',
    lastName: 'Pratama',
    group: 'Risk & Compliance',
    status: 'Probation',
    basicSalary: 16_900_000,
  },
  {
    firstName: 'Nadia',
    lastName: 'Putri',
    group: 'Marketing',
    status: 'Inactive',
    basicSalary: 11_800_000,
  },
  {
    firstName: 'Hendra',
    lastName: 'Kusuma',
    group: 'Sales',
    status: 'Active',
    basicSalary: 13_400_000,
  },
  {
    firstName: 'Ayu',
    lastName: 'Wulandari',
    group: 'Legal',
    status: 'Active',
    basicSalary: 15_100_000.25,
  },
  {
    firstName: 'Fajar',
    lastName: 'Nugroho',
    group: 'Customer Service',
    status: 'Active',
    basicSalary: 10_650_000.75,
  },
  {
    firstName: 'Tari',
    lastName: 'Permata',
    group: 'Administration',
    status: 'Probation',
    basicSalary: 11_250_000.5,
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
const SALARY_DECIMALS: readonly number[] = [0, 0.5, 0, 0.25, 0.75, 0];

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function buildIsoTimestamp(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
): string {
  return `${year}-${pad2(month)}-${pad2(day)}T${pad2(hour)}:${pad2(minute)}:00.000Z`;
}

export function generateDummyEmployees(count = 120): Employee[] {
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
    const birthHour = 7 + (i % 11);
    const birthMinute = (i * 15) % 60;

    const joinedYear = 2021 + (i % 5);
    const joinedMonth = ((i + 3) % 12) + 1;
    const joinedDay = ((i * 3) % 28) + 1;

    const computedSalary =
      8_500_000 + (i % 20) * 950_000 + SALARY_DECIMALS[i % SALARY_DECIMALS.length];

    employees.push({
      username,
      firstName,
      lastName,
      email: `${username}@company.co.id`,
      birthDate: buildIsoTimestamp(birthYear, birthMonth, birthDay, birthHour, birthMinute),
      basicSalary: seed?.basicSalary ?? computedSalary,
      status: seed?.status ?? STATUSES[i % STATUSES.length],
      group: seed?.group ?? DUMMY_GROUPS[i % DUMMY_GROUPS.length],
      description: buildIsoTimestamp(joinedYear, joinedMonth, joinedDay, 9, (i * 10) % 60),
    });
  }

  return employees;
}

export const DUMMY_EMPLOYEES: readonly Employee[] = generateDummyEmployees(120);
