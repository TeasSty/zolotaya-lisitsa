import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSiteMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.from(
        ".hero__eyebrow, .hero__brand, .hero__line, .hero__support, .hero__cta",
        {
          y: 28,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        },
      );

      gsap.to(".hero__gloss", {
        opacity: 0.55,
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.from(".works__item", {
        scrollTrigger: {
          trigger: ".works__strip",
          start: "top 80%",
        },
        x: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, [rootRef]);
}
