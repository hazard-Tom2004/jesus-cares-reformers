import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GalleryPreview from "@/components/GalleryPreview";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Target, Shield, Users, ArrowRight } from "lucide-react";
import { getGalleryImages } from "@/lib/getGalleryImg";

const highlights = [
  {
    icon: Target,
    title: "Care & Treatment",
    description: "Comprehensive rehabilitation services for drug dependent persons.",
  },
  {
    icon: Shield,
    title: "Risk Reduction",
    description: "Helping individuals reduce harm and recover safely.",
  },
  {
    icon: Users,
    title: "Reintegration",
    description: "Supporting successful return to family and community.",
  },
];

export default async function Home() {
  const images = await getGalleryImages();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Mission Highlights */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Our Mission
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground">
              As a registered NGO, we provide holistic support for individuals
              struggling with drug dependency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/30 card-hover text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
            >
              Learn more about our objectives
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <GalleryPreview images={images} />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Your generous donation helps us provide care, treatment, and
            rehabilitation services to those in need. Every contribution makes
            a difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto bg-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-background transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-xl font-semibold border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
