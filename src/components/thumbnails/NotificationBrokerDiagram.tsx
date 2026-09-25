export function NotificationBrokerDiagram() {
  return (
    <div
      className="relative z-[2] flex h-full w-full items-center justify-center p-4"
      style={{
        background:
          "radial-gradient(60% 55% at 78% 20%, rgba(177,78,255,0.08), transparent 60%), radial-gradient(50% 50% at 15% 85%, rgba(45,226,230,0.08), transparent 60%)",
      }}
    >
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 420 360" fill="none">
    <rect x="20" y="30" width="90" height="34" rx="8" fill="rgba(45,226,230,0.08)" stroke="#2de2e6" strokeWidth="1.2"/>
    <text x="65" y="51" fill="#2de2e6" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="10" textAnchor="middle">gRPC in</text>
    <g className="glow-node" style={{ color: '#b14eff' }}>
      <circle cx="80" cy="150" r="14" fill="#b14eff"/>
      <circle cx="150" cy="130" r="14" fill="#b14eff"/>
      <circle cx="150" cy="190" r="14" fill="#b14eff"/>
      <circle cx="80" cy="220" r="14" fill="#b14eff"/>
    </g>
    <text x="115" y="252" fill="#c9a3ff" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="10" textAnchor="middle">worker pool</text>
    <rect x="210" y="130" width="70" height="90" rx="10" fill="rgba(255,122,61,0.08)" stroke="#ff7a3d" strokeWidth="1.2"/>
    <text x="245" y="170" fill="#ff7a3d" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="10" textAnchor="middle">Redis</text>
    <text x="245" y="185" fill="#ff7a3d" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="10" textAnchor="middle">queue</text>
    <circle className="glow-node" cx="360" cy="90" r="10" fill="#2de2e6" style={{ color: '#2de2e6' }}/>
    <circle className="glow-node" cx="370" cy="170" r="10" fill="#2de2e6" style={{ color: '#2de2e6' }}/>
    <circle className="glow-node" cx="360" cy="250" r="10" fill="#2de2e6" style={{ color: '#2de2e6' }}/>
    <text x="365" y="290" fill="#7fe9ec" fontFamily="'JetBrains Mono','Fira Code',ui-monospace,monospace" fontSize="10" textAnchor="middle">fan-out</text>
    <path className="flow-line" d="M65 64 L80 150" stroke="#2de2e6" strokeWidth="1.4"/>
    <path className="flow-line" d="M94 150 L150 130" stroke="#b14eff" strokeWidth="1.4"/>
    <path className="flow-line" d="M94 220 L150 190" stroke="#b14eff" strokeWidth="1.4"/>
    <path className="flow-line" d="M164 130 L210 155" stroke="#b14eff" strokeWidth="1.4"/>
    <path className="flow-line" d="M164 190 L210 175" stroke="#b14eff" strokeWidth="1.4"/>
    <path className="flow-line" d="M280 150 L360 90" stroke="#ff7a3d" strokeWidth="1.4"/>
    <path className="flow-line" d="M280 170 L370 170" stroke="#ff7a3d" strokeWidth="1.4"/>
    <path className="flow-line" d="M280 190 L360 250" stroke="#ff7a3d" strokeWidth="1.4"/>
  </svg>
    </div>
  );
}
