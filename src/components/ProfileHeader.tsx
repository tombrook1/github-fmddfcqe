import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Mail, Camera, Coffee } from "lucide-react";
import { useState } from "react";
import CurrentStatus from "./CurrentStatus";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/tombrook1",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/tombrook",
    label: "LinkedIn"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:hello@tombrook.me",
    label: "Email"
  }
];

export default function ProfileHeader() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative inline-block"
        onHoverStart={() => setIsAvatarHovered(true)}
        onHoverEnd={() => setIsAvatarHovered(false)}
      >
        <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mx-auto ring-4 ring-black/20 ring-offset-4 ring-offset-white hover:ring-black/30 transition-all duration-300 cursor-pointer">
          <AvatarImage src="/profile.jpg" alt="Tom Brook" className="object-cover" />
          <AvatarFallback>TBB</AvatarFallback>
        </Avatar>
        {isAvatarHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-2 -right-2 bg-white shadow-lg rounded-full p-2"
          >
            <Camera className="w-4 h-4 text-black/60" />
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-2">Tom Brook</h1>
          <p className="text-lg sm:text-xl text-black/80 mb-1">Product Owner & SEO Consultant</p>
          <div className="flex items-center justify-center gap-2 text-black/60">
            <MapPin className="w-4 h-4" />
            <p className="text-base sm:text-lg">Melbourne, Australia</p>
          </div>
        </div>

        <div>
          <CurrentStatus />
        </div>

        <motion.div 
          className="flex justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white hover:bg-black/5 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-black/60 max-w-md mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs sm:text-sm">
            Former Police Detective turned Product Owner at Intrepid Travel.
            Passionate about creating impactful digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-sm text-black/40"
        >
          <Coffee className="w-4 h-4" />
          <span>Powered by coffee and curiosity</span>
        </motion.div>
      </motion.div>
    </div>
  );
}