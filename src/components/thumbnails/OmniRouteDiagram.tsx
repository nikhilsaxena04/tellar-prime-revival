export function OmniRouteDiagram() {
  return (
    <div className="relative z-[2] flex h-full w-full items-center justify-center p-4">
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 420 360" fill="none">
    <rect x="10" y="150" width="70" height="32" rx="8" fill="rgba(45,226,230,0.08)" stroke="#2de2e6" strokeWidth="1.2"/>
    <text x="45" y="169" fill="#2de2e6" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="9" textAnchor="middle">request</text>
    <rect x="120" y="122" width="96" height="88" rx="12" fill="rgba(255,122,61,0.07)" stroke="#ff7a3d" strokeWidth="1.2" strokeDasharray="3 4"/>
    <text x="168" y="155" fill="#ff9d68" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="9" textAnchor="middle">semantic</text>
    <text x="168" y="170" fill="#ff9d68" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="9" textAnchor="middle">cache</text>
    <text x="168" y="194" fill="#ff9d68" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="8" textAnchor="middle">pgvector</text>
    <circle className="glow-node" cx="280" cy="166" r="22" fill="#b14eff" style={{ color: '#b14eff' }}/>
    <text x="280" y="169" fill="#0a0a12" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="9" fontWeight="600" textAnchor="middle">Gateway</text>
    <circle className="glow-node" cx="385" cy="70" r="11" fill="#2de2e6" style={{ color: '#2de2e6' }}/>
    <text x="385" y="52" fill="#7fe9ec" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="9" textAnchor="middle">OpenAI</text>
    <circle className="glow-node" cx="400" cy="166" r="11" fill="#2de2e6" style={{ color: '#2de2e6' }}/>
    <text x="400" y="196" fill="#7fe9ec" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="9" textAnchor="middle">Anthropic</text>
    <circle className="glow-node" cx="385" cy="262" r="11" fill="#2de2e6" style={{ color: '#2de2e6' }}/>
    <text x="385" y="288" fill="#7fe9ec" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="9" textAnchor="middle">Gemini</text>
    <path className="flow-line" d="M80 166 L120 166" stroke="#2de2e6" strokeWidth="1.4"/>
    <path className="flow-line" d="M216 166 L258 166" stroke="#ff7a3d" strokeWidth="1.4"/>
    <path className="flow-line" d="M300 152 L385 80" stroke="#b14eff" strokeWidth="1.4"/>
    <path className="flow-line" d="M302 166 L389 166" stroke="#b14eff" strokeWidth="1.4"/>
    <path className="flow-line" d="M300 180 L385 252" stroke="#b14eff" strokeWidth="1.4"/>
  </svg>
    </div>
  );
}
