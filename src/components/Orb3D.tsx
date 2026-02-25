export default function Orb3D() {
  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
      
      <div className="w-[500px] h-[500px] bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 
      rounded-full blur-[120px] opacity-30 animate-pulse" />

      <div className="absolute w-[300px] h-[300px] bg-cyan-400 
      rounded-full blur-[100px] opacity-20 animate-bounce" />

    </div>
  );
}