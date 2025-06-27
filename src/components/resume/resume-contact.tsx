import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";
import { portfolioData } from "@/lib/data/data";

export function ContactCard() {
  const { contact } = portfolioData;

  return (
    <Card
      className="card-hover animate-fade-in-left stagger-1"
      aria-label="Contact Information"
    >
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary icon-wiggle" />
          Contact
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 text-sm">
        <address className="not-italic space-y-3">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a
              href={`mailto:${contact.email}`}
              className="link-hover"
              aria-label={`Email me at ${contact.email}`}
            >
              {contact.email}
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{contact.phone}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{contact.location}</span>
          </div>

          {/* LinkedIn */}
          {contact.social.linkedin && (
            <div className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              <a
                href={contact.social.linkedin}
                className="link-hover"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="View LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          )}

          {/* GitHub */}
          {contact.social.github && (
            <div className="flex items-center gap-3 ">
              <Github className="h-4 w-4 text-muted-foreground" />
              <a
                href={contact.social.github}
                className="link-hover"
                rel="noopener noreferrer"
                target="_blank"                
                aria-label="View GitHub profile"
              >
                GitHub
              </a>
            </div>
          )}

          {/* FaceBook */}
          {contact.social.facebook && (
            <div className="flex items-center gap-3 ">
              <Facebook className="h-4 w-4 text-muted-foreground" />
              <a
                href={contact.social.facebook}
                className="link-hover"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="View Facebook profile"
              >
                Facebook
              </a>
            </div>
          )}
        </address>
      </CardContent>
    </Card>
  );
}
