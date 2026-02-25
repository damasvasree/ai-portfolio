import AnimatedCursor from "react-animated-cursor";

export default function CursorGlow() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="0,255,255"
      outerAlpha={0.3}
      innerScale={1}
      outerScale={2}
    />
  );
}