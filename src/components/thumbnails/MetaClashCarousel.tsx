import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const IMAGES = ["/metaclash-1.jpg", "/metaclash-2.jpg", "/metaclash-3.jpg", "/metaclash-4.jpg"];

export function MetaClashCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % IMAGES.length), 3000);
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
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
}
