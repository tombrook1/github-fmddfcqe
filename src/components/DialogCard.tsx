import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import StoryContent from "./StoryContent";
import SEOServices from "./SEOServices";

interface DialogCardProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  children?: React.ReactNode;
  maxHeight?: string;
}

export default function DialogCard({ title, icon: Icon, iconColor, children, maxHeight = "85vh" }: DialogCardProps) {
  const dialogMaxHeight = title === "SEO Services" ? "calc(80vh - 4rem)" : maxHeight;
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card className="p-6 cursor-pointer bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className={`w-6 h-6 ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
              </motion.div>
              <span className="text-black text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">
                {title}
              </span>
            </div>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="dialog-gradient border-black/20 w-[90%] sm:w-[85%] max-w-2xl mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-black text-xl">
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className={`w-6 h-6 ${iconColor}`} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.span>
          </DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="overflow-y-auto px-2 sm:px-4 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent hover:scrollbar-thumb-black/20"
          style={{ maxHeight: dialogMaxHeight }}
        >
          {title === "My Story" ? <StoryContent /> : 
           title === "SEO Services" ? <SEOServices /> : 
           children}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}