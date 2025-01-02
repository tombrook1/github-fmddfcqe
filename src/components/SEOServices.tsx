import { motion } from "framer-motion";
import { TrendingUp, Users, Newspaper, LineChart } from "lucide-react";

interface CaseStudyProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CaseStudy({ icon, title, description }: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-3 sm:p-6 border border-black/5 hover:border-black/10 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-black mb-1 sm:mb-2">{title}</h3>
          <p className="text-sm text-black/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SEOServices() {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-3 sm:p-6 border border-black/5"
        >
          <h2 className="font-semibold text-black mb-2">Core Services</h2>
          <ul className="list-disc pl-4 space-y-1 text-sm text-black/80">
            <li>Monthly Retainer</li>
            <li>SEO Audits</li>
            <li>Content Services</li>
            <li>SEO Consultancy</li>
            <li>Technical SEO</li>
          </ul>
        </motion.div>

        <div className="border-t border-black/10 pt-3">
          <h2 className="font-semibold text-black mb-2">Recent Work</h2>
          <p className="text-sm text-black/80 mb-3 leading-relaxed">
            I've partnered with e-commerce platforms, content-driven sites, and major national brands, 
            crafting unique strategies to boost their online presence.
          </p>

          <div className="grid gap-2">
            <CaseStudy
              icon={<TrendingUp className="w-5 h-5 text-green-600" />}
              title="1,000-12,000 Monthly Users In 7 Months"
              description="I guided a national service business through a web re-platforming and developed a content strategy to boost brand visibility and sales."
            />

            <CaseStudy
              icon={<Users className="w-5 h-5 text-blue-600" />}
              title="55% increase in Users YOY"
              description="In a project with an e-commerce client, I used a mix of large technical SEO fixes and added content to drive results."
            />

            <CaseStudy
              icon={<Newspaper className="w-5 h-5 text-purple-600" />}
              title="Featured in the Independent"
              description="I planned and ran a digital PR campaign that got a client featured in The Independent, boosting brand credibility."
            />

            <CaseStudy
              icon={<LineChart className="w-5 h-5 text-orange-600" />}
              title="Growing Personal Projects"
              description="I applied various SEO strategies to my own recruitment website, successfully growing it to 20,000 sessions a month."
            />
          </div>
        </div>
      </div>
    </div>
  );
}