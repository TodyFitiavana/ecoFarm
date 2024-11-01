import { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedElementProps {
  from: {
    opacity?: number;
    x?: number;
    y?: number;
    rotate?: number;
    scale?: number;
  };
  to: {
    opacity?: number;
    x?: number;
    y?: number;
    rotate?: number;
    scale?: number;
  };
  delay?: number;
  duration?: number;
  children: ReactNode;
}

const AnimatedElement: FC<AnimatedElementProps> = ({
  children,
  from,
  to,
  delay = 0,
  duration = 1,
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (ref.current) {
      if (!animationRef.current) {
        animationRef.current = gsap.fromTo(
          ref.current,
          { ...from, delay, duration, ease: "power1.out" },
          {
            ...to,
            delay,
            duration,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, [from, to, duration, delay]);

  return (
    <div ref={ref} className="animated">
      {children}
    </div>
  );
};

export default AnimatedElement;
