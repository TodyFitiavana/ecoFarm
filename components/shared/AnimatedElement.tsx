import React, { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedElementProps {
  from: { opacity: number; x?: number; y?: number };
  to: { opacity: number; x?: number; y?: number };
  delay?: number;
  duration?: number;
  children: ReactNode;
}

const AnimatedElement: FC<AnimatedElementProps> = ({
  from,
  to,
  delay,
  duration,
  children,
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  console.log(ref.current);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, from, {
        ...to,
        delay,
        duration,
        ease: "power1.out",
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
