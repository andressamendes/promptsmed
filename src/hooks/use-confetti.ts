import confetti from "canvas-confetti";

export function useConfetti() {
  const fireConfetti = (options?: {
    x?: number;
    y?: number;
    colors?: string[];
  }) => {
    const defaults = {
      particleCount: 50,
      spread: 60,
      origin: { 
        x: options?.x ?? 0.5, 
        y: options?.y ?? 0.6 
      },
      colors: options?.colors ?? ["#10a37f", "#cc785c", "#8e8ea0", "#4285f4", "#20b8cd"],
      ticks: 100,
      gravity: 1.2,
      decay: 0.94,
      startVelocity: 20,
      shapes: ["circle", "square"],
      scalar: 0.8,
    };

    confetti(defaults);
  };

  const fireSuccessConfetti = (event?: MouseEvent | React.MouseEvent) => {
    if (event) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      
      fireConfetti({ x, y });
    } else {
      fireConfetti();
    }
  };

  return { fireConfetti, fireSuccessConfetti };
}
