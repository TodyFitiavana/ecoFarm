import { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface TextStaggerDownProps {
  from?: { opacity?: number; x?: number; y?: number };
  to?: { opacity?: number; x?: number; y?: number };
  duration?: number;
  children: ReactNode;
  delay?: number;
}

const TextStaggersDown: FC<TextStaggerDownProps> = ({
  children,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  duration = 0.22,
  delay,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (ref.current) {
      const letters = ref.current.querySelectorAll(".letters-staggers-down");

      if (!animationRef.current) {
        animationRef.current = gsap.fromTo(
          letters,
          { ...from },
          {
            ...to,
            duration,
            delay: delay,
            stagger: 0.1,
          }
        );
      }
    }
  }, [from, to, duration, delay]);

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
};

export default TextStaggersDown;
