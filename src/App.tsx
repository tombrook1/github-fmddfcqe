import { BookOpen, Briefcase, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import ProfileHeader from "./components/ProfileHeader";
import DialogCard from "./components/DialogCard";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import StoryContent from "./components/StoryContent";
import SEOServices from "./components/SEOServices";

const workHistory = [
  {
    company: "Intrepid Travel",
    role: "Digital Product Owner",
    period: "Oct 2024 - Present",
    location: "Melbourne, Victoria, Australia",
    description: "Leading digital product strategy and development for sustainable travel experiences."
  },
  {
    company: "Intrepid Travel",
    role: "Senior SEO Specialist - ANZ",
    period: "May 2024 - Oct 2024",
    location: "Melbourne, Victoria, Australia",
    description: "Driving organic growth strategy for the APAC region."
  },
  {
    company: "Intrepid Travel", 
    role: "Senior SEO Specialist - EMEA & NA",
    period: "Sep 2021 - May 2024",
    location: "London, United Kingdom",
    description: "Led SEO strategy across European and North American markets."
  },
  {
    company: "SitePie",
    role: "SEO Freelancer",
    period: "Jan 2020 - Present",
    location: "Remote",
    description: "Providing strategic SEO consulting and implementation for clients globally."
  },
  {
    company: "Police Scotland",
    role: "Police Detective",
    period: "2015 - 2021", 
    location: "Scotland, United Kingdom",
    description: "Conducted complex investigations and led response teams."
  }
];

function App() {
  return (
    <main className="min-h-screen bg-white">
      <div className="p-4 md:p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <ProfileHeader />
          
          {/* Interactive Dialog Cards */}
          <div className="grid gap-3">
            <DialogCard 
              title="My Story" 
              icon={User} 
              iconColor="text-black"
              maxHeight="70vh"
            />

            <DialogCard 
              title="Work History" 
              icon={Briefcase} 
              iconColor="text-black"
              maxHeight="70vh"
            >
              <div className="p-4">
                <Timeline items={workHistory} />
              </div>
            </DialogCard>

            <DialogCard 
              title="SEO Services" 
              icon={BookOpen} 
              iconColor="text-black"
            />

            <DialogCard 
              title="Contact" 
              icon={Mail} 
              iconColor="text-black"
            >
              <address className="font-mono not-italic">
                <div className="space-y-4">
                  <p>Let's discuss how I can help your business grow.</p>
                  <div className="space-y-2">
                    <p>📧 Email: <a href="mailto:contact@tombrook.me" className="text-blue-600 hover:underline">contact@tombrook.me</a></p>
                    <p>🌐 LinkedIn: <a href="https://linkedin.com/in/tombrook" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">/in/tombrook</a></p>
                    <p>📍 Based in Melbourne, Australia</p>
                  </div>
                </div>
              </address>
            </DialogCard>

            <section className="mt-8">
              <motion.div 
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-black">What People Say</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-black/10 to-transparent ml-4" />
              </motion.div>
              <Testimonials />
            </section>
          </div>

          {/* SEO Content - Visible in page source but visually hidden */}
          <div className="opacity-0 h-0 overflow-hidden" aria-hidden="true">
            <article>
              <h2>My Story</h2>
              <StoryContent />
            </article>
            
            <article>
              <h2>Work History</h2>
              <Timeline items={workHistory} />
            </article>
            
            <article>
              <h2>SEO Services</h2>
              <SEOServices />
            </article>
            
            <article>
              <h2>Contact Information</h2>
              <address className="not-italic">
                <p>Let's discuss how I can help your business grow.</p>
                <p>Email: contact@tombrook.me</p>
                <p>LinkedIn: /in/tombrook</p>
                <p>Based in Melbourne, Australia</p>
              </address>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;