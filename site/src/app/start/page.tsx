import { SessionProvider } from '@/lib/session-context';
import SessionFlow from '@/components/interactive/SessionFlow';

export default function StartPage() {
  return (
    <SessionProvider>
      <div className="py-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Start a Session</h1>
          <p className="text-slate-600 mt-2">
            Access To Peace will guide you through a structured process to help with your situation.
            Your safety comes first — crisis resources are always available.
          </p>
        </div>
        <SessionFlow />
      </div>
    </SessionProvider>
  );
}
