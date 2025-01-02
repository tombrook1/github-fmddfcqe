import { motion } from "framer-motion";
import { Coffee, Headphones, Book, Plane } from "lucide-react";
import { useState, useEffect } from "react";

interface StatusItem {
  icon: React.ReactNode;
  text: string;
}

const statuses: StatusItem[] = [
  { icon: <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Drinking coffee" },
  { icon: <Headphones className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Listening to podcasts" },
  { icon: <Book className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Reading product strategy" },
  { icon: <Plane className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Planning travels" }
];

export default function CurrentStatus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-black/5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-1 sm:gap-1.5">
        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
        </span>
        <span>Currently:</span>
      </div>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex items-center gap-1 sm:gap-1.5"
      >
        <span>{statuses[currentIndex].icon}</span>
        <span className="inline-block">
          {statuses[currentIndex].text}
        </span>
      </motion.div>
    </motion.div>
  );
}