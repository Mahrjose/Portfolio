import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { portfolioData } from "@/lib/data";
import { SocialIcons } from "@/components/layout/social-icons";

export default function SocialLinksCard() {
  const { contact } = portfolioData;

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
        <CardDescription>Connect with me on social platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <SocialIcons
          social={[
            { name: "LinkedIn", url: contact.social.linkedin },
            { name: "GitHub", url: contact.social.github },
            { name: "Facebook", url: contact.social.facebook },
            { name: "Twitter", url: contact.social.twitter },
            { name: "Discord", url: contact.social.discord},
            { name: "Reddit", url: contact.social.reddit },
          ]}
          variant="outline"
          size="default"
          className="flex-wrap gap-3"
        />
      </CardContent>
    </Card>
  );
}
