'use client';

import { useSession } from '@/lib/session-context';
import { roles, pods } from '@/lib/roles-data';

export default function RoleSelector() {
  const { setRole } = useSession();

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Who are you?</h2>
      <p className="text-slate-600 mb-6">Select your role to personalize your experience. Your language, options, and outputs will adjust to fit.</p>

      {pods.map(pod => (
        <div key={pod.number} className="mb-6">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3" style={{ color: pod.borderColor }}>
            {pod.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {roles.filter(r => r.podNumber === pod.number).map(role => (
              <button
                key={role.code}
                onClick={() => setRole(role.name, role.code, pod.name)}
                className="text-left p-4 border-2 rounded-lg hover:shadow-md transition-all"
                style={{ borderColor: pod.borderColor + '40', backgroundColor: pod.color + '40' }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = pod.borderColor; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = pod.borderColor + '40'; }}
              >
                <div className="font-medium text-slate-900">{role.name}</div>
                <div className="text-sm text-slate-500 mt-1">{role.description}</div>
                <div className="text-xs text-slate-400 mt-2">Code: {role.code}</div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
