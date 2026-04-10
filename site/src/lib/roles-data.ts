export interface Role {
  name: string;
  code: string;
  pod: string;
  podNumber: number;
  description: string;
  defaultModules: string[];
}

export const pods = [
  { name: 'Individual & Family', number: 1, color: '#e3f2fd', borderColor: '#1565c0' },
  { name: 'Mediation & Conflict', number: 2, color: '#e8f5e9', borderColor: '#2e7d32' },
  { name: 'Mental Health', number: 3, color: '#fce4ec', borderColor: '#c62828' },
  { name: 'Legal & Court', number: 4, color: '#fff3e0', borderColor: '#e65100' },
  { name: 'School & Youth', number: 5, color: '#f3e5f5', borderColor: '#6a1b9a' },
  { name: 'Community & Nonprofit', number: 6, color: '#e0f2f1', borderColor: '#00695c' },
];

export const roles: Role[] = [
  // Pod 1
  { name: 'Individual', code: 'IND', pod: 'Individual & Family', podNumber: 1, description: 'Anyone navigating a personal conflict', defaultModules: ['MOD-05', 'MOD-01', 'MOD-13'] },
  { name: 'Parent (Co-Parenting)', code: 'PAR', pod: 'Individual & Family', podNumber: 1, description: 'Navigating communication with a co-parent', defaultModules: ['MOD-04', 'MOD-17', 'MOD-05'] },
  { name: 'Youth / Teen', code: 'YTH', pod: 'Individual & Family', podNumber: 1, description: 'Young person navigating peer, family, or school conflict', defaultModules: ['MOD-23', 'MOD-21', 'MOD-13'] },
  { name: 'Elder / Caregiver', code: 'ELD', pod: 'Individual & Family', podNumber: 1, description: 'Older adult or caregiver managing family tension', defaultModules: ['MOD-05', 'MOD-15', 'MOD-25'] },
  // Pod 2
  { name: 'Mediator', code: 'MED', pod: 'Mediation & Conflict', podNumber: 2, description: 'Preparing for or conducting mediation', defaultModules: ['MOD-09', 'MOD-10', 'MOD-08'] },
  { name: 'Arbitrator', code: 'ARB', pod: 'Mediation & Conflict', podNumber: 2, description: 'Preparing for or conducting a hearing', defaultModules: ['MOD-09', 'MOD-20'] },
  { name: 'Conflict Coach', code: 'CCH', pod: 'Mediation & Conflict', podNumber: 2, description: 'Coaching on conflict skills', defaultModules: ['MOD-08', 'MOD-02', 'MOD-03'] },
  { name: 'Restorative Facilitator', code: 'RPF', pod: 'Mediation & Conflict', podNumber: 2, description: 'Running restorative circles or harm repair', defaultModules: ['MOD-11', 'MOD-12', 'MOD-26'] },
  // Pod 3
  { name: 'Therapist / Counselor', code: 'THR', pod: 'Mental Health', podNumber: 3, description: 'Supporting a client in conflict', defaultModules: ['MOD-14', 'MOD-13', 'MOD-15'] },
  { name: 'Psychiatrist', code: 'PSY', pod: 'Mental Health', podNumber: 3, description: 'Supporting a patient with crisis context', defaultModules: ['MOD-14', 'MOD-07'] },
  { name: 'Social Worker', code: 'SWK', pod: 'Mental Health', podNumber: 3, description: 'Navigating case management and service access', defaultModules: ['MOD-25', 'MOD-14', 'MOD-05'] },
  { name: 'Peer Support Specialist', code: 'PSS', pod: 'Mental Health', podNumber: 3, description: 'Lived-experience peer supporter', defaultModules: ['MOD-13', 'MOD-02', 'MOD-15'] },
  // Pod 4
  { name: 'Family Law Attorney', code: 'ATT', pod: 'Legal & Court', podNumber: 4, description: 'Representing a party in family law', defaultModules: ['MOD-17', 'MOD-20', 'MOD-18'] },
  { name: 'Guardian ad Litem', code: 'GAL', pod: 'Legal & Court', podNumber: 4, description: 'Court-appointed child advocate', defaultModules: ['MOD-20', 'MOD-17', 'MOD-07'] },
  { name: 'Judge / Court Staff', code: 'JDG', pod: 'Legal & Court', podNumber: 4, description: 'Needing neutral summaries', defaultModules: ['MOD-20', 'MOD-06'] },
  { name: 'Victim Advocate', code: 'VAD', pod: 'Legal & Court', podNumber: 4, description: 'Supporting a victim or survivor', defaultModules: ['MOD-14', 'MOD-07', 'MOD-19'] },
  // Pod 5
  { name: 'School Counselor', code: 'SCL', pod: 'School & Youth', podNumber: 5, description: 'Supporting student conflict and wellness', defaultModules: ['MOD-21', 'MOD-22', 'MOD-23'] },
  { name: 'Teacher / Administrator', code: 'TCH', pod: 'School & Youth', podNumber: 5, description: 'Responding to classroom conflict', defaultModules: ['MOD-22', 'MOD-21'] },
  // Pod 6
  { name: 'Community Organizer', code: 'ORG', pod: 'Community & Nonprofit', podNumber: 6, description: 'Facilitating neighborhood or community disputes', defaultModules: ['MOD-24', 'MOD-12', 'MOD-26'] },
  { name: 'Nonprofit Case Manager', code: 'NCM', pod: 'Community & Nonprofit', podNumber: 6, description: 'Helping clients navigate conflict and services', defaultModules: ['MOD-25', 'MOD-05', 'MOD-13'] },
];
