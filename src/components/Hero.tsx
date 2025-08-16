/**
 * Hero Section Component
 * 
 * Features Daniel's professional photo and brief introduction.
 * 
 * To edit:
 * - Change photo: update the src attribute in the img tag
 * - Edit introduction: modify the text in the paragraphs
 * - Update name: change the h1 content
 */

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  // Hero content - easy to edit
  const name = "Daniel Kashnitsky";
  const title = "Public Health & Migration Expert";
  const introduction = "Public health and migration expert with 15+ years' experience in academic research, international advocacy, and policy change. Proven track record in leading multi-country projects on HIV, TB, and health equity for migrant populations. Adviser to WHO, UN agencies, and EU bodies.";

  const scrollToContent = () => {
    const element = document.getElementById('experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-light to-background px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Professional Photo */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="/lovable-uploads/8fcbba85-45bb-47a9-ad3d-9a335be4b725.png"
              alt="Daniel Kashnitsky - Professional Photo"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">
            {name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary mb-6">
            {title}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            {introduction}
          </p>
        </div>

        {/* Call to Action */}
        <Button 
          onClick={scrollToContent}
          variant="default"
          size="lg"
          className="group"
        >
          Explore My Experience
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;