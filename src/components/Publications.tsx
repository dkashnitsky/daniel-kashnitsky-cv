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
      title: "Building social equity and person-centred innovation into the end TB response",
      journal: "The International Journal of Tuberculosis and Lung Disease",
      year: "2024",
      description: "Co-authored publication examining social equity approaches in tuberculosis response strategies.",
      url: "https://www.ingentaconnect.com/content/iuatld/ijtld/2024/00000028/00000011/art00002"
    },
    {
      title: "'Performance of Illegality' Toward Migrants Living with HIV in Russia: From Social Exclusion to Deportation",
      journal: "Informality, Labour Mobility and Precariousness (Springer)",
      year: "2022",
      description: "Book chapter analyzing state control mechanisms and social exclusion of migrants with HIV in Russia.",
      url: "https://link.springer.com/chapter/10.1007/978-3-030-91875-1_7"
    },
    {
      title: "'In Short, We Will Deport You': Disrupted temporalities of migrants with HIV in Russia",
      journal: "Global Public Health",
      year: "2021",
      description: "Analysis of temporal disruptions and deportation threats affecting migrants living with HIV.",
      url: "https://www.tandfonline.com/doi/full/10.1080/17441692.2021.1988692"
    },
    {
      title: "The Russian HIV residence ban and state control of migration",
      journal: "Journal of Public Health Policy",
      year: "2020",
      description: "Examination of HIV-based residence restrictions and their impact on migration policy.",
      url: "https://link.springer.com/article/10.1057/s41271-020-00226-z"
    },
    {
      title: "'Kyrgyz clinics' in Moscow: Medical Centers for Central Asian Migrants",
      journal: "Journal of Medical Anthropology",
      year: "2018",
      description: "Ethnographic study of informal healthcare systems serving Central Asian migrants in Moscow.",
      url: "https://www.tandfonline.com/doi/full/10.1080/01459740.2018.1532421"
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