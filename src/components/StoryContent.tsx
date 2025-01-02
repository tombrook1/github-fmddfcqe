import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface StorySegmentProps {
  title: string;
  content: React.ReactNode;
  isLast?: boolean;
}

function StorySegment({ title, content, isLast }: StorySegmentProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <h3 className="text-lg font-semibold text-black mb-4">{title}</h3>
        <div className="text-black/80 space-y-4 leading-relaxed">{content}</div>
      </motion.div>
      
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-10"
        >
          <ArrowDown className="w-6 h-6 text-black/20" />
        </motion.div>
      )}
    </div>
  );
}

export default function StoryContent() {
  return (
    <div className="space-y-12 py-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/5 backdrop-blur-sm rounded-lg p-4 text-black/80"
      >
        <span className="font-semibold">TL;DR:</span> Former Police Detective, now Product Owner
      </motion.div>

      <div className="space-y-12">
        <StorySegment
          title="Police Career"
          content={
            <p>
              I spent six years in law enforcement, beginning as a response officer. The role required calm under pressure 
              and quick decision-making to handle whatever came my way. Later, I moved into a detective role, focusing on 
              complex cases and finding the details needed to solve them. Those years taught me the value of precision 
              and analysis—skills I never expected to rely on in the digital world.
            </p>
          }
        />

        <StorySegment
          title="SEO Journey"
          content={
            <>
              <p>
                During the pandemic, like many, I was on the hunt for a new hobby to pass the time. That's when I 
                stumbled into web design. It seemed like a good fit at first, but it quickly became clear that design 
                and I were not meant to be.
              </p>
              <p>
                Realising that maybe my creative talents lay elsewhere, I discovered SEO. Suddenly, I was spending 
                every spare moment glued to my laptop, diving deep into the world of search engine optimisation.
              </p>
              <p className="font-medium text-black/90">
                This wasn't just a hobby anymore; it was a passion.
              </p>
            </>
          }
        />

        <StorySegment
          title="Travel Passion"
          content={
            <p>
              For those who don't know me, I don't stay put for long. Travel is a big part of my life, taking me to 
              every continent but Antarctica (stay tuned) and through over 35 countries. But it's not just about 
              ticking off places, it's about immersing myself in local communities and learning new cultures.
            </p>
          }
        />

        <StorySegment
          title="Intrepid Journey"
          content={
            <>
              <p>
                I was lucky enough to combine my passion for travel along with SEO for a dream role at Intrepid. 
                I was the Senior SEO Specialist for EMEA & North America before moving down under to look after 
                the APAC region at Intrepid Travel, a BCorp that runs small group tours worldwide.
              </p>
              <p>
                I am proud to work at Intrepid Travel and it's commitment to creating positive change through 
                the joy of travel.
              </p>
            </>
          }
        />

        <StorySegment
          title="Product Owner Role"
          content={
            <p>
              As I step into the Product Owner role at Intrepid Travel, I'm excited to create digital experiences 
              that make exploring the world even more meaningful. Working with talented teams and gathering insights, 
              I'll be shaping features that improve our travellers' journeys and align with Intrepid's mission.
            </p>
          }
        />

        <StorySegment
          title="Freelancing"
          content={
            <p>
              Freelancing has given me the freedom to improve my SEO skills whilst getting to work with all sorts 
              of clients from everywhere, which keeps things interesting and on my toes. I'm all about quality over 
              quantity, so I only take on a few projects at a time. This way, I can dive deep into each one, making 
              sure they get the attention they deserve.
            </p>
          }
          isLast
        />
      </div>
    </div>
  );
}