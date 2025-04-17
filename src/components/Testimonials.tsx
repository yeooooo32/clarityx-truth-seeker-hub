
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  initials: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Investigative Journalist",
    avatar: "",
    initials: "AM",
    content: "ClarityX saved me from publishing a misattributed quote. It's become an essential tool in my verification process.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Political Analyst",
    avatar: "",
    initials: "SC",
    content: "The real-time verification feature is a game-changer. I can fact-check claims during live broadcasts.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Wright",
    role: "News Editor",
    avatar: "",
    initials: "MW",
    content: "We've reduced corrections by 37% since implementing ClarityX across our newsroom.",
    rating: 4
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Social Media Manager",
    avatar: "",
    initials: "AP",
    content: "The browser extension makes it so easy to verify content before sharing. Essential tool for anyone online.",
    rating: 5
  },
  {
    id: 5,
    name: "Carlos Mendez",
    role: "Research Analyst",
    avatar: "",
    initials: "CM",
    content: "ClarityX helps me process information faster with confidence that I'm working with verified data.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white text-glow">
            Loved by journalists, analysts, and truth-seekers worldwide
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join thousands of professionals who rely on ClarityX to verify information in real-time.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-6 no-scrollbar">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`min-w-[300px] md:min-w-[350px] glass-card p-6 snap-center transform transition-all duration-500
                  ${index === activeIndex ? 'scale-105 border-clarityx-purple/50' : 'opacity-70 hover:opacity-100 hover:scale-102'}
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center">
                    <Avatar>
                      {testimonial.avatar ? 
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} /> :
                        <AvatarFallback className="bg-gradient-to-br from-clarityx-purple/30 to-clarityx-blue/30">{testimonial.initials}</AvatarFallback>
                      }
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-200 italic">"{testimonial.content}"</blockquote>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-clarityx-purple w-6' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
