import { BookOpen, Briefcase, Mail, User } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import DialogCard from "./DialogCard";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import StoryContent from "./StoryContent";
import SEOServices from "./SEOServices";
import { workHistory } from "@/lib/data";

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <div className="p-4 md:p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <ProfileHeader />
          
          <section className="grid gap-3">
            <DialogCard 
              title="My Story" 
              icon={User} 
              iconColor="text-black"
              maxHeight="70vh"
            >
              <StoryContent />
            </DialogCard>

            <DialogCard 
              title="Work History" 
              icon={Briefcase} 
              iconColor="text-black"
              maxHeight="70vh"
            >
              <Timeline items={workHistory} />
            </DialogCard>

            <DialogCard 
              title="SEO Services" 
              icon={BookOpen} 
              iconColor="text-black"
            >
              <SEOServices />
            </DialogCard>

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
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-6">What People Say</h2>
            <Testimonials />
          </section>
        </div>
      </div>
    </main>
  );
}