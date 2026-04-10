'use client';

import { useState } from 'react';
import { useSession } from '@/lib/session-context';

const suggestions = [
  "I need help with a conflict",
  "Help me rewrite a message",
  "I have a mediation coming up",
  "I don't feel safe",
  "My co-parent and I can't communicate",
  "Something happened at school",
  "Our neighborhood has a problem",
  "I'm overwhelmed and need support",
];

export default function TriggerInput() {
  const { session, setTrigger } = useSession();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) setTrigger(text.trim());
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">What's going on?</h2>
      <p className="text-slate-600 mb-1">Tell us what you need help with, in your own words.</p>
      <p className="text-sm text-slate-400 mb-6">Role: <span className="font-medium text-slate-600">{session.role} ({session.roleCode})</span></p>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Describe your situation or what you need help with..."
        className="w-full p-4 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows={4}
      />

      <button
        onClick={handleSubmit}
        disabled={!text.trim()}
        className="mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
      >
        Continue
      </button>

      <div className="mt-6">
        <p className="text-sm text-slate-500 mb-3">Or choose a common starting point:</p>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => { setText(s); }}
              className="px-3 py-1.5 text-sm border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
