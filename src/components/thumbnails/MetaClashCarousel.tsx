import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { metaClashImages as IMAGES } from "@/data/portfolio";

const EASE = [0.33, 0, 0.2, 1] as const;

export function MetaClashCarousel() {
  const [i, setI] = useState(0);

  // Preload all images once so rotation never flashes a blank frame.
  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 z-[2] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={IMAGES[i]}
          src={IMAGES[i]}
          alt={`Meta Clash screenshot ${i + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 1.2, ease: EASE } }}
          transition={{ duration: 1.6, ease: EASE, opacity: { duration: 1.2, ease: EASE } }}
        />
      </AnimatePresence>
    </div>
  );
}
