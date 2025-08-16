/**
 * Daniel Kashnitsky - Professional Portfolio
 * 
 * Main portfolio page featuring:
 * - Hero section with professional photo and introduction
 * - Professional experience timeline
 * - Education background
 * - Key publications with links
 * - Skills and competencies
 * - Volunteering activities
 * - Contact information and social profiles
 * 
 * To edit content, modify the individual component files in src/components/
 */

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Photo and Introduction */}
      <Hero />
      
      {/* Professional Experience */}
      <Experience />
      
      {/* Education Background */}
      <Education />
      
      {/* Key Publications */}
      <Publications />
      
      {/* Skills and Competencies */}
      <Skills />
      
      {/* Volunteering & Civil Society */}
      <Volunteering />
      
      {/* Contact Information */}
      <Contact />
    </div>
  );
};

export default Index;
