export default function SafetyBanner() {
  return (
    <div className="bg-red-50 border-b border-red-200 px-4 py-2 text-center text-sm text-red-800">
      <strong>Crisis?</strong>{' '}
      <span className="inline-flex gap-3 flex-wrap justify-center">
        <span>911 (Emergency)</span>
        <span>&middot;</span>
        <span>988 (Suicide &amp; Crisis)</span>
        <span>&middot;</span>
        <span>1-800-799-7233 (DV Hotline)</span>
        <span>&middot;</span>
        <span>Text HOME to 741741</span>
      </span>
    </div>
  );
}
