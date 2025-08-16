/**
 * Education Section
 * 
 * To edit:
 * - Add/remove degrees: modify the education array
 * - Update content: edit degree, institution, year, and description fields
 * - Add specializations: update the description field
 */

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  // Education data - easy to edit
  const education = [
    {
      degree: "PhD in Public Health",
      institution: "University of Amsterdam",
      year: "2012",
      description: "Dissertation on HIV prevention strategies among migrant populations in Europe. Magna cum laude."
    },
    {
      degree: "Master of Science in Epidemiology",
      institution: "London School of Hygiene & Tropical Medicine",
      year: "2008",
      description: "Specialized in infectious disease epidemiology and global health policy."
    },
    {
      degree: "Bachelor of Medicine",
      institution: "Medical University",
      year: "2006",
      description: "General medicine with focus on public health and preventive medicine."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Education
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Academic foundation in public health, epidemiology, and medicine
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="border-border-light hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-6">
                    <span className="inline-block bg-accent-light text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;