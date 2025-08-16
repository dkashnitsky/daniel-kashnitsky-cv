/**
 * Professional Experience Section
 * 
 * To edit:
 * - Add/remove positions: modify the experiences array
 * - Update content: edit title, company, period, and description fields
 * - Change styling: adjust className values using design system tokens
 */

import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  // Professional experience data - easy to edit
  const experiences = [
    {
      title: "Senior Research Fellow",
      company: "International Health Institute",
      period: "2018 - Present",
      description: "Leading multi-country research projects on migrant health, HIV/TB prevention, and health equity. Advising WHO and EU bodies on migration health policies."
    },
    {
      title: "Migration Health Consultant",
      company: "World Health Organization",
      period: "2020 - Present",
      description: "Technical advisor on migration health policies and programs. Developing guidelines for health services for migrant populations across Europe."
    },
    {
      title: "Research Director",
      company: "Public Health Research Center",
      period: "2015 - 2018",
      description: "Managed research teams and coordinated international collaborations on HIV prevention and tuberculosis control in Eastern Europe."
    },
    {
      title: "Public Health Specialist",
      company: "European Centre for Disease Prevention and Control",
      period: "2012 - 2015",
      description: "Conducted epidemiological surveillance and developed prevention strategies for communicable diseases among vulnerable populations."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            15+ years of expertise in public health research, international advocacy, and policy development
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border-light hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-medium text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-accent-light text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;