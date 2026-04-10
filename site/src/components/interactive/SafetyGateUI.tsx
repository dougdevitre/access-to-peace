'use client';

import { useSession } from '@/lib/session-context';
import { detectSafetyLevel } from '@/lib/safety-keywords';
import { useEffect } from 'react';

const levelColors = {
  Green: { bg: '#e8f5e9', border: '#4caf50', text: '#1b5e20' },
  Yellow: { bg: '#fff8e1', border: '#ffc107', text: '#f57f17' },
  Orange: { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
  Red: { bg: '#ffebee', border: '#f44336', text: '#b71c1c' },
};

export default function SafetyGateUI() {
  const { session, setSafetyLevel, completeSafetyGate, setStep } = useSession();

  useEffect(() => {
    if (session.trigger) {
      const level = detectSafetyLevel(session.trigger);
      setSafetyLevel(level);
    }
  }, [session.trigger, setSafetyLevel]);

  const level = session.safetyLevel || 'Green';
  const colors = levelColors[level];

  if (level === 'Red') {
    return (
      <div className="rounded-xl p-6" style={{ backgroundColor: colors.bg, border: `2px solid ${colors.border}` }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>Your safety comes first</h2>
        <p className="text-lg mb-4">I hear you. Before anything else — are you safe right now?</p>

        <div className="bg-white rounded-lg p-4 mb-4 space-y-3">
          <p className="font-bold text-red-700">If this is an emergency: Call 911</p>
          <p><strong>Suicide & Crisis Lifeline:</strong> Call or text <strong>988</strong></p>
          <p><strong>National DV Hotline:</strong> <strong>1-800-799-7233</strong></p>
          <p><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></p>
        </div>

        <div className="flex gap-3 mt-4">
          <button onClick={() => completeSafetyGate()} className="px-4 py-2 bg-white border-2 border-slate-300 rounded-lg text-sm hover:bg-slate-50">
            I'm safe — continue
          </button>
          <button onClick={() => setStep('role-select')} className="px-4 py-2 bg-white border-2 border-slate-300 rounded-lg text-sm hover:bg-slate-50">
            I need to step away
          </button>
        </div>
      </div>
    );
  }

  if (level === 'Orange') {
    return (
      <div className="rounded-xl p-6" style={{ backgroundColor: colors.bg, border: `2px solid ${colors.border}` }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: colors.text }}>Safety Check</h2>
        <p className="mb-4">Before we continue — is anyone in immediate physical danger right now?</p>

        <div className="bg-white rounded-lg p-4 mb-4 text-sm space-y-2">
          <p><strong>988</strong> — Suicide & Crisis Lifeline (call or text)</p>
          <p><strong>1-800-799-7233</strong> — National DV Hotline</p>
          <p><strong>Text HOME to 741741</strong> — Crisis Text Line</p>
        </div>

        <div className="flex gap-3">
          <button onClick={() => completeSafetyGate()} className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700">
            No immediate danger — continue
          </button>
          <button onClick={() => completeSafetyGate()} className="px-4 py-2 bg-white border border-orange-300 rounded-lg text-sm hover:bg-orange-50">
            Not sure — help me check
          </button>
        </div>
      </div>
    );
  }

  if (level === 'Yellow') {
    return (
      <div className="rounded-xl p-6" style={{ backgroundColor: colors.bg, border: `2px solid ${colors.border}` }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: colors.text }}>Quick Check-In</h2>
        <p className="mb-4">It sounds like things are stressful. Is anyone in immediate danger?</p>

        <div className="flex gap-3">
          <button onClick={() => completeSafetyGate()} className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700">
            No — let's continue
          </button>
          <button onClick={() => { setSafetyLevel('Orange'); }} className="px-4 py-2 bg-white border border-yellow-400 rounded-lg text-sm hover:bg-yellow-50">
            I'm not sure
          </button>
        </div>

        <p className="text-xs text-slate-500 mt-4">Crisis resources are always available: 988 · 1-800-799-7233 · Text HOME to 741741</p>
      </div>
    );
  }

  // Green
  return (
    <div className="rounded-xl p-6" style={{ backgroundColor: colors.bg, border: `2px solid ${colors.border}` }}>
      <h2 className="text-xl font-bold mb-3" style={{ color: colors.text }}>Ready to Continue</h2>
      <p className="mb-4">No safety concerns detected. Let's get you the help you need.</p>

      <button onClick={() => completeSafetyGate()} className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
        Continue to Module
      </button>

      <p className="text-xs text-slate-500 mt-4">If anything changes, crisis resources are always available: 988 · 1-800-799-7233 · Text HOME to 741741</p>
    </div>
  );
}
