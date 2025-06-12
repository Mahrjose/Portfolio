"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Building,
  ArrowRight,
  Calendar,
  MapPin,
  Laptop,
  Globe,
  Linkedin,
} from "lucide-react";

// import { FaLinkedin } from "react-icons/fa"; // Use when Lucide removes brand icons
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scrollReveal";

export function EmploymentStatus() {
  const { ref, isVisible } = useScrollReveal();

  const { employment } = portfolioData;
  const isEmployed = employment.status === "employed";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          {isEmployed ? (
            <div>
              {/* Heading */}
              <div className="text-center mb-12 md:animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
                  Currently Working At
                </h2>
                <p className="text-muted-foreground text-lg">
                  Where I'm making an impact
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Card */}
                <div className="lg:col-span-1 md:animate-fade-in-left">
                  <Card className="h-full card-hover group relative overflow-hidden">
                    <CardContent className="p-6 h-full">
                      <div className="flex flex-col justify-center items-center text-center h-full md:transition-transform md:duration-300 md:group-hover:-translate-y-4">
                        <div className="relative w-32 h-32 mb-6 bg-muted rounded-2xl overflow-hidden animate-float">
                          <Image
                            src={
                              employment.current.logo ||
                              "/images/logo/placeholder/company-logo.png"
                            }
                            alt={`${employment.current.company} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <h3 className="text-2xl font-bold mb-2">
                          {employment.current.company}
                        </h3>
                        <p className="text-primary font-medium text-lg">
                          {employment.current.position}
                        </p>
                      </div>

                      {/* Hover Links */}
                      <div className="absolute bottom-6 left-0 right-0 justify-center gap-3 hidden sm:flex opacity-0 md:group-hover:opacity-100 pointer-events-none md:group-hover:pointer-events-auto transition-opacity duration-300">
                        {employment.current.company_website && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover-lift"
                            asChild
                          >
                            <a
                              href={employment.current.company_website}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit company website"
                            >
                              <Globe
                                className="w-5 h-5 text-muted-foreground hover:text-primary transition"
                                aria-hidden
                              />
                            </a>
                          </Button>
                        )}
                        {employment.current.company_linkedin && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover-lift"
                            asChild
                          >
                            <a
                              href={employment.current.company_linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View company LinkedIn"
                            >
                              <Linkedin
                                className="w-5 h-5 text-muted-foreground hover:text-primary transition"
                                aria-hidden
                              />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Job Details */}
                <div className="lg:col-span-2 space-y-6 md:animate-fade-in-right">
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                        <Building
                          className="h-5 w-5 text-primary"
                          aria-hidden
                        />
                        Role Overview
                      </h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {employment.current.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                        <div className="flex items-start gap-3">
                          <Calendar
                            className="h-4 w-4 text-primary mt-1"
                            aria-hidden
                          />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-muted-foreground">
                              {employment.current.startDate} – Present
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin
                            className="h-4 w-4 text-primary mt-1"
                            aria-hidden
                          />
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="text-muted-foreground">
                              {employment.current.location}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Laptop
                            className="h-4 w-4 text-primary mt-1"
                            aria-hidden
                          />
                          <div>
                            <p className="font-medium">Job Type</p>
                            <p className="text-muted-foreground">
                              {employment.current.type}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div
                    className="text-center pt-4 md:animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <p className="text-muted-foreground mb-6 text-lg">
                      {employment.employedMessage}
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover-lift"
                      asChild
                    >
                      <Link href="/contact">
                        <Mail className="h-4 w-4 mr-2" aria-hidden />
                        Let's Connect
                        <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Looking for Opportunities
            <div className="max-w-4xl mx-auto text-center md:animate-fade-in-up space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                  Available for New Opportunities
                </h2>
                <p className="text-muted-foreground text-lg">
                  Actively exploring impactful roles in tech — let's build
                  something meaningful together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm sm:text-base text-muted-foreground">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary w-5 h-5" aria-hidden />
                    <h4 className="font-semibold text-lg text-primary">
                      I'm Looking For
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-foreground font-medium">
                        🌍 Remote / Hybrid Work
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Prefer remote-first teams or flexible hybrid
                        environments.
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-foreground font-medium">
                        🚀 Purpose-Driven Products
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Teams focused on solving real-world problems with tech.
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-foreground font-medium">
                        🤝 Collaborative Culture
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Open communication, flat structure, and engineering
                        excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary w-5 h-5" aria-hidden />
                    <h4 className="font-semibold text-lg text-primary">
                      What I Bring
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-foreground font-medium">
                        🧠 Technical Versatility
                      </p>
                      <p className="text-sm text-muted-foreground">
                        AI, security, fullstack dev, automation, cloud — I build
                        fast and securely.
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-foreground font-medium">
                        📦 End-to-End Ownership
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Experience delivering projects from idea to deployment
                        and beyond.
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-foreground font-medium">
                        💬 Clear Communication
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Able to explain complex systems clearly — both technical
                        and strategic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Want to discuss a role or collaboration?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Button
                    variant="default"
                    size="lg"
                    className="hover-lift"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" aria-hidden />
                      Get in Touch
                      <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover-lift"
                    asChild
                  >
                    <Link href="/resume" className="flex items-center">
                      <span role="img" aria-label="resume" className="mr-2">
                        📄
                      </span>
                      View Résumé
                      <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
