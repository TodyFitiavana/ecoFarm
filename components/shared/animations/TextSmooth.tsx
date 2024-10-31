import { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextSmoothProps {
  color?: string;
  duration?: number;
  container: string;
  children: ReactNode;
}

const TextSmooth: FC<TextSmoothProps> = ({
  children,
  container,
  duration = 0.2,
  color,
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const letters = ref.current?.querySelectorAll(".letters-text-smooth");

    if (letters && letters.length > 0) {
      const anim = gsap.to(letters, {
        color: color,
        duration: duration,
        stagger: 0.1,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 95%",
        onEnter: () => anim.play(),
      });

      return () => {
        anim.kill();
        ScrollTrigger.getById(container)?.kill();
      };
    }
  }, [container, color, duration]);

  return <div ref={ref}>{children}</div>;
};

export default TextSmooth;
