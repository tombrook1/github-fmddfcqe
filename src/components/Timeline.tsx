import { motion } from "framer-motion";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-8 md:pl-32"
        >
          <div className="timeline-dot" />
          
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-2 md:mb-0 md:flex-1">
              <h3 className="text-lg font-semibold text-black">{item.company}</h3>
              <p className="text-black/80 font-medium">{item.role}</p>
              <p className="text-black/60">{item.location}</p>
              {item.description && (
                <p className="text-black/70 mt-2">{item.description}</p>
              )}
            </div>
            <div className="text-black/60 md:w-32 md:text-right">
              {item.period}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}