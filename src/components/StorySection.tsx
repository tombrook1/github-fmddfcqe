import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Search, 
  Plane, 
  Building2, 
  Briefcase,
  Code,
  ArrowDown
} from "lucide-react";

interface StorySectionProps {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  tags?: string[];
  isLast?: boolean;
}

function StorySection({ title, icon, content, tags, isLast }: StorySectionProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg relative z-10"
      >
        <div className="flex items-start gap-4">
          <motion.div 
            className="p-3 bg-white rounded-lg shadow-sm"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <div className="flex-1 space-y-3">
            <motion.h3 
              className="text-lg font-semibold text-black"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {title}
            </motion.h3>
            <div className="text-black/80 space-y-2 leading-relaxed">{content}</div>
            {tags && (
              <motion.div 
                className="flex flex-wrap gap-2 pt-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
      {!isLast && (
        <motion.div 
          className="absolute left-[2.85rem] top-full h-8 flex items-center justify-center z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ArrowDown className="w-6 h-6 text-black/20" />
        </motion.div>
      )}
    </div>
  );
}

export default function Story() {
  return (
    <div className="space-y-8">
      <motion.div 
        className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-lg text-white shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg font-medium">Former Police Detective turned Product Owner & Digital Strategist</p>
      </motion.div>

      <div className="space-y-12">
        <StorySection
          title="Police Career"
          icon={<Shield className="w-6 h-6 text-blue-600" />}
          content={
            <p>I spent six years in law enforcement, beginning as a response officer. The role required calm under pressure and quick decision-making to handle whatever came my way. Later, I moved into a detective role, focusing on complex cases and finding the details needed to solve them. Those years taught me the value of precision and analysis—skills I never expected to rely on in the digital world.</p>
          }
          tags={["Investigation", "Leadership", "Decision Making", "Analysis"]}
        />

        <StorySection
          title="SEO Journey"
          icon={<Search className="w-6 h-6 text-green-600" />}
          content={
            <>
              <p>During the pandemic, like many, I was on the hunt for a new hobby to pass the time. That's when I stumbled into web design. It seemed like a good fit at first, but it quickly became clear that design and I were not meant to be.</p>
              <p className="mt-2">Realising that maybe my creative talents lay elsewhere, I discovered SEO. Suddenly, I was spending every spare moment glued to my laptop, diving deep into the world of search engine optimisation.</p>
              <p className="mt-2">This wasn't just a hobby anymore; it was a passion.</p>
            </>
          }
          tags={["SEO", "Digital Marketing", "Web Analytics", "Content Strategy"]}
        />

        <StorySection
          title="Travel Passion"
          icon={<Plane className="w-6 h-6 text-purple-600" />}
          content={
            <p>For those who don't know me, I don't stay put for long. Travel is a big part of my life, taking me to every continent but Antarctica (stay tuned) and through over 35 countries. But it's not just about ticking off places, it's about immersing myself in local communities and learning new cultures.</p>
          }
          tags={["35+ Countries", "6 Continents", "Cultural Exchange", "Adventure"]}
        />

        <StorySection
          title="Intrepid Journey"
          icon={<Building2 className="w-6 h-6 text-orange-600" />}
          content={
            <>
              <p>I was lucky enough to combine my passion for travel along with SEO for a dream role at Intrepid. I was the Senior SEO Specialist for EMEA & North America before moving down under to look after the APAC region at Intrepid Travel, a BCorp that runs small group tours worldwide.</p>
              <p className="mt-2">I am proud to work at Intrepid Travel and it's commitment to creating positive change through the joy of travel.</p>
            </>
          }
          tags={["BCorp", "Sustainable Travel", "Digital Growth", "Global Impact"]}
        />

        <StorySection
          title="Product Owner Role"
          icon={<Briefcase className="w-6 h-6 text-red-600" />}
          content={
            <p>As I step into the Product Owner role at Intrepid Travel, I'm excited to create digital experiences that make exploring the world even more meaningful. Working with talented teams and gathering insights, I'll be shaping features that improve our travellers' journeys and align with Intrepid's mission.</p>
          }
          tags={["Product Strategy", "User Experience", "Agile", "Digital Innovation"]}
        />

        <StorySection
          title="Freelancing"
          icon={<Code className="w-6 h-6 text-indigo-600" />}
          content={
            <p>Freelancing has given me the freedom to improve my SEO skills whilst getting to work with all sorts of clients from everywhere, which keeps things interesting and on my toes. I'm all about quality over quantity, so I only take on a few projects at a time. This way, I can dive deep into each one, making sure they get the attention they deserve.</p>
          }
          tags={["SEO Consulting", "Digital Strategy", "Client Success", "Growth"]}
          isLast
        />
      </div>
    </div>
  );
}