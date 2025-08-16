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
      degree: "PhD in Sociology and Demography",
      institution: "Doctoral school 624, Sorbonne, Paris",
      year: "2023",
      description: "Dissertation: Barriers and informal strategies to access medical care for irregular labor migrants living with HIV in Russia. 180 credits."
    },
    {
      degree: "Guest PhD Scholar",
      institution: "Linköping University, Sweden",
      year: "2019-2020",
      description: "Research Center for Migration, Ethnicity and Society under supervision of Anna Bredström. Scholarship from the Swedish Institute."
    },
    {
      degree: "Master of Science in Public Health",
      institution: "Lund University, Sweden",
      year: "2009-2011",
      description: "Concentration: epidemiology and biostatistics, health communication, social diseases, reproductive health, and rights. 120 credits."
    },
    {
      degree: "Specialist in Theoretical and Applied Linguistics",
      institution: "Moscow State University, Russia",
      year: "1998-2003",
      description: "Comprehensive linguistic training with focus on theoretical and applied aspects of language studies."
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