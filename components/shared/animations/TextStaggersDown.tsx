import { FC, useEffect, useRef } from "react";
import { AnimatedElementProps } from "../AnimatedElement";
import gsap from "gsap";

interface TextStaggerDownProps extends AnimatedElementProps {}

const TextStaggersDown: FC<TextStaggerDownProps> = ({
  children,
  from,
  to,
  duration = 0.2,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const letters = ref.current.querySelectorAll(".letters");
      gsap.fromTo(
        letters,
        { ...from, opacity: 0 },
        { ...to, opacity: 1, duration, ease: "power1.out", stagger: 0.1 }
      );
    }
  }, [to, from, duration]);

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
};

export default TextStaggersDown;
