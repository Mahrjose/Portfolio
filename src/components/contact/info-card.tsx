import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { portfolioData } from "@/lib/data/data";

export default function ContactInfoCard() {
  const { contact } = portfolioData;

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Feel free to reach out through any of these channels</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Email</p>
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline text-sm">
              {contact.email}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Phone</p>
            <a href={`tel:${contact.phone}`} className="text-primary hover:underline text-sm">
              {contact.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Location</p>
            <p className="text-muted-foreground text-sm">{contact.location}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Availability</p>
            <p className="text-muted-foreground text-sm">{contact.availability}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
