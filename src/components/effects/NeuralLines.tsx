export default function NeuralLines() {
  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <svg width="100%" height="100%">
        <line x1="10%" y1="20%" x2="60%" y2="40%" stroke="#06b6d4" strokeWidth="1" />
        <line x1="60%" y1="40%" x2="30%" y2="70%" stroke="#8b5cf6" strokeWidth="1" />
        <line x1="30%" y1="70%" x2="80%" y2="80%" stroke="#06b6d4" strokeWidth="1" />
      </svg>
    </div>
  );
}