import { useRef, useState, useCallback } from "react";

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
  glareX: number;
  glareY: number;
}

interface UseTiltOptions {
  max?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
}

export function useTilt<T extends HTMLElement>(options: UseTiltOptions = {}) {
  const { max = 15, scale = 1.02, speed = 400, glare = true } = options;
  
  const ref = useRef<T>(null);
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * -max;
    const rotateY = (mouseX / (rect.width / 2)) * max;
    
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    setTilt({
      rotateX,
      rotateY,
      scale,
      glareX,
      glareY,
    });
  }, [max, scale]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      glareX: 50,
      glareY: 50,
    });
  }, []);

  const style: React.CSSProperties = {
    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
    transition: isHovering ? `transform ${speed / 4}ms ease-out` : `transform ${speed}ms ease-out`,
    transformStyle: "preserve-3d",
  };

  const glareStyle: React.CSSProperties = glare ? {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none" as const,
    background: isHovering 
      ? `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
      : "none",
    borderRadius: "inherit",
    transition: `opacity ${speed}ms ease-out`,
    opacity: isHovering ? 1 : 0,
  } : {};

  return {
    ref,
    style,
    glareStyle,
    isHovering,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
