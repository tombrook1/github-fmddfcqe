import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  relationship: string;
  content: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Erin Shand",
    role: "Actor & Musician",
    relationship: "Erin worked with Tom on the same team",
    content: [
      "Tom joined Intrepid and SEO never looked so good! I've been working with Tom over the last 2 and a half years and in that time he has taken our technical SEO to the next level. He's super proactive, takes so much initiative and is very reliable.",
      "Tom is also a really kind and understanding person, with his calm demeanor he makes a great manager within our team. I know we can always count on him to listen and encourage others. His problem-solving skills are second to none, always getting to the bottom of any issues in a heartbeat.",
      "Tom is a rare gem with great attention to detail, super diligent and also ambitious to grow and learn himself. I 100% recommend Tom for any future role!"
    ]
  },
  {
    id: 2,
    name: "Jade Anne Dover",
    role: "Marketing Obsessed | Passionate About Learning | Mentor | Author | Mental Health Advocate",
    relationship: "Jade Anne was Tom's client",
    content: [
      "Tom has worked with us at SES Home Services for about 8 months and has been the driving force behind increasing the web traffic to our new website and driving conversions. Tom's knowledge around SEO is brilliant and he has helped to increase the knowledge of our internal marketing team in this area. We would definitely recommend Tom and his team to anyone who is looking to invest in SEO to grow their business."
    ]
  },
  {
    id: 3,
    name: "Mithul Mistry",
    role: "Head of SEO at Cube3",
    relationship: "Mithul worked with Tom but on different teams",
    content: [
      "I've worked with Tom in the past on a few projects, his SEO knowledge and professionalism is top tier. I'd highly recommend working with him."
    ]
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full py-8">
      <Card className="relative overflow-hidden bg-white shadow-xl" style={{ height: '400px' }}>
        <div className="absolute top-4 right-4 z-10">
          <Quote className="w-8 h-8 text-black/10" />
        </div>
        
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="p-8 h-full"
        >
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-black">{testimonials[currentIndex].name}</h3>
            <p className="text-black/60 text-sm">{testimonials[currentIndex].role}</p>
            <p className="text-black/40 text-xs mt-1">
              {testimonials[currentIndex].relationship}
            </p>
          </div>

          <div className="space-y-4 overflow-y-auto pr-2 pb-16" style={{ maxHeight: 'calc(100% - 120px)' }}>
            {testimonials[currentIndex].content.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-black/80 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-4 right-4 flex gap-2 bg-white/80 backdrop-blur-sm px-2 rounded-full">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-black/60" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-black/60" />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 flex gap-1 bg-white/80 backdrop-blur-sm px-2 rounded-full">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-black/40 w-4" : "bg-black/20"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}