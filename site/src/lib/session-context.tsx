'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface SessionState {
  id: string;
  role: string | null;
  roleCode: string | null;
  rolePod: string | null;
  trigger: string | null;
  triggerCode: string | null;
  safetyLevel: 'Green' | 'Yellow' | 'Orange' | 'Red' | null;
  safetyGateCompleted: boolean;
  moduleCode: string | null;
  moduleName: string | null;
  answers: Record<string, string>;
  artifact: string | null;
  step: 'role-select' | 'trigger-input' | 'safety-gate' | 'module-questions' | 'artifact-view' | 'next-module';
}

const initialState: SessionState = {
  id: '',
  role: null,
  roleCode: null,
  rolePod: null,
  trigger: null,
  triggerCode: null,
  safetyLevel: null,
  safetyGateCompleted: false,
  moduleCode: null,
  moduleName: null,
  answers: {},
  artifact: null,
  step: 'role-select',
};

interface SessionContextType {
  session: SessionState;
  setRole: (role: string, code: string, pod: string) => void;
  setTrigger: (trigger: string) => void;
  setSafetyLevel: (level: 'Green' | 'Yellow' | 'Orange' | 'Red') => void;
  completeSafetyGate: () => void;
  setModule: (code: string, name: string) => void;
  setAnswer: (questionId: string, answer: string) => void;
  setArtifact: (artifact: string) => void;
  setStep: (step: SessionState['step']) => void;
  resetSession: () => void;
}

const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<SessionState>({
    ...initialState,
    id: Math.random().toString(36).substring(2, 15),
  });

  const setRole = (role: string, code: string, pod: string) => {
    setSession(prev => ({ ...prev, role, roleCode: code, rolePod: pod, step: 'trigger-input' }));
  };

  const setTrigger = (trigger: string) => {
    setSession(prev => ({ ...prev, trigger, step: 'safety-gate' }));
  };

  const setSafetyLevel = (level: 'Green' | 'Yellow' | 'Orange' | 'Red') => {
    setSession(prev => ({ ...prev, safetyLevel: level }));
  };

  const completeSafetyGate = () => {
    setSession(prev => ({ ...prev, safetyGateCompleted: true, step: 'module-questions' }));
  };

  const setModule = (code: string, name: string) => {
    setSession(prev => ({ ...prev, moduleCode: code, moduleName: name }));
  };

  const setAnswer = (questionId: string, answer: string) => {
    setSession(prev => ({ ...prev, answers: { ...prev.answers, [questionId]: answer } }));
  };

  const setArtifact = (artifact: string) => {
    setSession(prev => ({ ...prev, artifact, step: 'artifact-view' }));
  };

  const setStep = (step: SessionState['step']) => {
    setSession(prev => ({ ...prev, step }));
  };

  const resetSession = () => {
    setSession({ ...initialState, id: Math.random().toString(36).substring(2, 15) });
  };

  return (
    <SessionContext.Provider value={{
      session, setRole, setTrigger, setSafetyLevel, completeSafetyGate,
      setModule, setAnswer, setArtifact, setStep, resetSession,
    }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) throw new Error('useSession must be used within SessionProvider');
  return context;
}
