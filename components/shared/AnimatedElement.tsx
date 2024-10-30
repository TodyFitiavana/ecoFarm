import { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface AnimatedElementProps {
  from: { opacity?: number; x?: number; y?: number };
  to: { opacity?: number; x?: number; y?: number };
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

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        ...from,
        delay,
        duration,
        ease: "power1.out",
      });

      gsap.to(ref.current, {
        ...to,
        delay,
        duration,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "play none none none",
        },
      });
    }
  }, [from, to, duration, delay]);

  return (
    <div ref={ref} className="animated">
      {children}
    </div>
  );
};

export default AnimatedElement;
