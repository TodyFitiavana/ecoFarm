import { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextStaggerDownProps {
  from?: { opacity?: number; x?: number; y?: number };
  to?: { opacity?: number; x?: number; y?: number };
  duration?: number;
  children: ReactNode;
}

const TextStaggersDown: FC<TextStaggerDownProps> = ({
  children,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  duration = 0.22,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const letters = ref.current.querySelectorAll(".letters-staggers-down");

      gsap.fromTo(
        letters,
        { ...from },
        {
          ...to,
          duration,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [from, to, duration]);

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
};

export default TextStaggersDown;
