/**
 * Contact Section
 * 
 * To edit:
 * - Update contact info: modify the contactInfo object
 * - Add/remove social links: edit the socialLinks array
 * - Change links: update href attributes with actual URLs
 * - Add icons: import new icons from lucide-react if needed
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Linkedin, 
  ExternalLink,
  User,
  GraduationCap,
  Search
} from "lucide-react";

const Contact = () => {
  // Contact information - easy to edit
  const contactInfo = {
    email: "kashnitsky@gmail.com", // Replace with actual email
    phone: "+31 20 123 4567", // Replace with actual phone
    whatsapp: "+31 20 123 4567", // Replace with actual WhatsApp
    telegram: "@danielkash" // Replace with actual Telegram
  };

  // Social media and professional profiles - easy to edit
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/danielkashnitsky", // Replace with actual URL
      description: "Professional network"
    },
    {
      name: "ResearchGate",
      icon: User,
      url: "https://researchgate.net/profile/Daniel-Kashnitsky", // Replace with actual URL
      description: "Research publications"
    },
    {
      name: "Google Scholar",
      icon: GraduationCap,
      url: "https://scholar.google.com/citations?user=example", // Replace with actual URL
      description: "Citation profile"
    },
    {
      name: "ORCID",
      icon: Search,
      url: "https://orcid.org/0000-0000-0000-0000", // Replace with actual URL
      description: "Research identifier"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Open to collaboration, consultation, and discussion on public health and migration issues
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card className="border-border-light">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary mr-3" />
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary mr-3" />
                  <a 
                    href={`https://t.me/${contactInfo.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    Telegram: {contactInfo.telegram}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media & Professional Profiles */}
          <Card className="border-border-light">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Professional Profiles
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start p-3 h-auto hover:bg-accent-light"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      <IconComponent className="h-5 w-5 text-primary mr-3" />
                      <div className="text-left">
                        <div className="font-medium text-text-primary">
                          {link.name}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {link.description}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-text-secondary ml-auto" />
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => window.location.href = `mailto:${contactInfo.email}`}
          >
            <Mail className="h-5 w-5 mr-2" />
            Send Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;