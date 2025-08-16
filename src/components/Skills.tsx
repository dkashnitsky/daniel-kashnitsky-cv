/**
 * Skills and Competencies Section
 * 
 * To edit:
 * - Add/remove skills: modify the skills object
 * - Update categories: add new categories or edit existing ones
 * - Change skill items: edit the items arrays for each category
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Users, BarChart3 } from "lucide-react";

const Skills = () => {
  // Skills data organized by categories - easy to edit
  const skills = {
    languages: {
      icon: Globe,
      title: "Languages",
      items: ["Russian (Native)", "English (Advanced)", "French (Advanced)", "Hebrew (Intermediate)"]
    },
    competencies: {
      icon: BarChart3,
      title: "Key Competencies",
      items: ["Migration & Global Health Policy", "HIV/TB Program Design & Evaluation", "Advocacy & Strategic Communication", "Academic Research & Publications", "International Stakeholder Engagement"]
    },
    technical: {
      icon: Code,
      title: "Technical Skills",
      items: ["MS Office & Google Tools", "NVIVO & Atlas.ti", "Qualitative Data Analysis", "Professional AI Use", "Social Media Management"]
    },
    grants: {
      icon: Users,
      title: "Grant & Donor Relations",
      items: ["Global Fund", "UNAIDS", "EU Funding", "Robert Carr Fund", "Capacity Building & Empowerment", "Cross-cultural Sensitivity"]
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Skills & Competencies
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive expertise across research, policy, technology, and international collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <Card key={key} className="border-border-light hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl font-semibold text-text-primary">
                    <IconComponent className="h-6 w-6 text-primary mr-3" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-accent-light text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;