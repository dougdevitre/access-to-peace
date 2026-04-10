export const harmKeywords = [
  'hurt', 'harm', 'kill', 'hit', 'abuse', 'scared', 'weapon', 'threat',
  'danger', 'emergency', 'injury', 'unsafe', 'suicide', 'self-harm',
  "can't go on", 'no way out', 'gun', 'knife', 'violence', 'afraid',
  'terrified', 'stalking', 'choking', 'strangling',
];

export function detectSafetyLevel(text: string): 'Green' | 'Yellow' | 'Orange' | 'Red' {
  const lower = text.toLowerCase();

  // Red: emergency/imminent harm keywords
  const redKeywords = ['kill', 'suicide', 'self-harm', "can't go on", 'no way out', 'weapon', 'gun', 'knife', 'emergency', 'violence', 'choking', 'strangling'];
  if (redKeywords.some(k => lower.includes(k))) return 'Red';

  // Orange: active threat/DV indicators
  const orangeKeywords = ['hit', 'abuse', 'threat', 'danger', 'injury', 'unsafe', 'stalking', 'scared', 'afraid', 'terrified'];
  if (orangeKeywords.some(k => lower.includes(k))) return 'Orange';

  // Yellow: distress indicators
  const yellowKeywords = ['hurt', 'harm', 'overwhelmed', 'can\'t calm', 'anxious', 'panic', 'grief', 'loss', 'burned out'];
  if (yellowKeywords.some(k => lower.includes(k))) return 'Yellow';

  return 'Green';
}
