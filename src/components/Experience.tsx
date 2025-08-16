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
      title: "Chair of the Board & Academic Relations",
      company: "Regional Expert Group on Migration and Health",
      period: "2020 - Present",
      description: "Lead operational research and advocacy initiatives improving access to healthcare for migrants across Eastern Europe and Central Asia. Contributed to adoption of national laws in three EECA countries enabling transnational HIV care for migrants. Managed secretariat team overseeing annual budget of ~USD 150K."
    },
    {
      title: "Postdoctoral Researcher",
      company: "Cermes3, Paris Cité University, France",
      period: "2023 - Present",
      description: "Leading ANRS-MIE (INSERM)-funded project 'East-European Refugees in Receiving Countries' examining barriers and community engagement to improve access to HIV and TB care. Founded network uniting community-based and academic researchers. Laureate, PAUSE Program, Collège de France."
    },
    {
      title: "Community, Rights and Gender Program Manager",
      company: "TB Europe Coalition, Kyiv, Ukraine",
      period: "2019 - 2020",
      description: "Coordinated development of training modules and guidelines for members across Eastern Europe and Central Asia. Represented Coalition in WHO and Stop TB Partnership expert groups. Led initiatives addressing gender, age, and human-rights barriers to HIV, TB services."
    },
    {
      title: "Technical Support Specialist",
      company: "European and Central Asia Union of People Living with HIV",
      period: "2017 - 2018",
      description: "Provided technical support to community organizations in 10 EECA countries for Global Fund regional program. Led regional advocacy campaign promoting migrants' rights to access HIV and TB care across EECA region."
    },
    {
      title: "Program Manager, Sustainability and Transition Team",
      company: "Eurasian Harm Reduction Association, Vilnius, Lithuania",
      period: "2015 - 2017",
      description: "Managed Global Fund project 'Equitable Access to HIV Care Continuum in the EECA Region' in 7 countries. Led Eurasian Regional Consortium project funded by Robert Carr Fund. Directed program monitoring and evaluation."
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