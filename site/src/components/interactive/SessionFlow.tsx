'use client';

import { useSession } from '@/lib/session-context';
import RoleSelector from './RoleSelector';
import TriggerInput from './TriggerInput';
import SafetyGateUI from './SafetyGateUI';

export default function SessionFlow() {
  const { session, resetSession } = useSession();

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        {['role-select', 'trigger-input', 'safety-gate', 'module-questions', 'artifact-view'].map((step, i) => {
          const steps = ['role-select', 'trigger-input', 'safety-gate', 'module-questions', 'artifact-view'];
          const currentIndex = steps.indexOf(session.step);
          const isActive = i === currentIndex;
          const isComplete = i < currentIndex;
          const labels = ['Role', 'Situation', 'Safety', 'Questions', 'Artifact'];
          return (
            <div key={step} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                isComplete ? 'bg-green-500 text-white' :
                isActive ? 'bg-blue-600 text-white' :
                'bg-slate-200 text-slate-500'
              }`}>
                {isComplete ? '✓' : i + 1}
              </div>
              <span className={`text-xs hidden sm:inline ${isActive ? 'text-blue-600 font-medium' : 'text-slate-400'}`}>
                {labels[i]}
              </span>
              {i < 4 && <div className={`w-6 h-0.5 ${isComplete ? 'bg-green-500' : 'bg-slate-200'}`} />}
            </div>
          );
        })}
        <button onClick={resetSession} className="ml-auto text-xs text-slate-400 hover:text-slate-600">
          Start over
        </button>
      </div>

      {/* Step content */}
      {session.step === 'role-select' && <RoleSelector />}
      {session.step === 'trigger-input' && <TriggerInput />}
      {session.step === 'safety-gate' && <SafetyGateUI />}
      {session.step === 'module-questions' && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Module: {session.moduleCode || 'Determining...'}</h2>
          <p className="text-slate-600 mb-2">Role: {session.role} ({session.roleCode})</p>
          <p className="text-slate-600 mb-2">Situation: {session.trigger}</p>
          <p className="text-slate-600 mb-6">Safety Level: <span className={`font-medium ${
            session.safetyLevel === 'Green' ? 'text-green-600' :
            session.safetyLevel === 'Yellow' ? 'text-yellow-600' :
            session.safetyLevel === 'Orange' ? 'text-orange-600' :
            'text-red-600'
          }`}>{session.safetyLevel}</span></p>
          <p className="text-sm text-slate-400">Module question forms coming in the next phase.</p>
          <p className="text-sm text-slate-400 mt-2">For now, explore the <a href="/modules" className="text-blue-600 underline">module documentation</a> to continue your journey.</p>
        </div>
      )}
      {session.step === 'artifact-view' && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Artifact Generated</h2>
          <p className="text-slate-400">Artifact generation coming in the next phase.</p>
        </div>
      )}
    </div>
  );
}
