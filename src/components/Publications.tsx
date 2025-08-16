/**
 * Publications Section
 * 
 * To edit:
 * - Add/remove publications: modify the publications array
 * - Update links: change the url field to actual publication URLs
 * - Edit content: modify title, journal, year, and description fields
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const Publications = () => {
  // Publications data - easy to edit
  const publications = [
    {
      title: "Health Equity and Migration: A Systematic Review of Interventions in Europe",
      journal: "The Lancet Public Health",
      year: "2023",
      description: "Comprehensive analysis of health interventions for migrant populations across 27 European countries.",
      url: "https://example.com/publication1" // Replace with actual URL
    },
    {
      title: "HIV Prevention Strategies Among Eastern European Migrants: Multi-Country Analysis",
      journal: "Journal of Public Health",
      year: "2022",
      description: "Evidence-based recommendations for HIV prevention programs targeting migrant communities.",
      url: "https://example.com/publication2" // Replace with actual URL
    },
    {
      title: "Tuberculosis Control in Migrant Populations: Policy Recommendations for EU",
      journal: "European Respiratory Journal",
      year: "2021",
      description: "Policy framework for improving TB diagnosis and treatment among migrants in European settings.",
      url: "https://example.com/publication3" // Replace with actual URL
    },
    {
      title: "WHO Guidelines on Migration Health: Implementation Challenges",
      journal: "Bulletin of the World Health Organization",
      year: "2020",
      description: "Analysis of implementation barriers and solutions for WHO migration health guidelines.",
      url: "https://example.com/publication4" // Replace with actual URL
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Key Publications
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Selected peer-reviewed publications in leading international journals
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <Card key={index} className="border-border-light hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                      <p className="text-lg font-medium text-primary">
                        {pub.journal}
                      </p>
                      <span className="hidden md:block text-text-secondary">•</span>
                      <span className="inline-block bg-accent-light text-primary px-2 py-1 rounded text-sm font-medium">
                        {pub.year}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {pub.description}
                    </p>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-6">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full md:w-auto"
                      onClick={() => window.open(pub.url, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Publication
                    </Button>
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

export default Publications;