/**
 * Volunteering & Civil Society Section
 * 
 * To edit:
 * - Add/remove activities: modify the activities array
 * - Update content: edit organization, role, period, and description fields
 */

import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Volunteering = () => {
  // Volunteering activities - easy to edit
  const activities = [
    {
      organization: "Doctors Without Borders",
      role: "Public Health Consultant",
      period: "2019 - Present",
      description: "Providing technical expertise on health programs for refugee populations in crisis settings."
    },
    {
      organization: "European Public Health Alliance",
      role: "Board Member",
      period: "2020 - Present",
      description: "Contributing to policy advocacy for health equity and migrant health rights across Europe."
    },
    {
      organization: "International AIDS Society",
      role: "Scientific Committee Member",
      period: "2018 - Present",
      description: "Reviewing research proposals and shaping global HIV prevention strategies."
    },
    {
      organization: "Red Cross International",
      role: "Health Advisory Group",
      period: "2017 - Present",
      description: "Advising on health program development for vulnerable and displaced populations."
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Volunteering & Civil Society
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Commitment to humanitarian work and civil society engagement for global health equity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="border-border-light hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-text-primary mb-1">
                    {activity.role}
                  </h3>
                  <p className="text-lg font-medium text-primary mb-2">
                    {activity.organization}
                  </p>
                  <span className="inline-block bg-accent-light text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {activity.period}
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;