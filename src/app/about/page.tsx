import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <About />
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-primary-foreground">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Want to Support Our Cause?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Your contribution can help transform lives. Join us in our mission
              to rehabilitate and reintegrate drug dependent persons.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/donate"
                className="w-full sm:w-auto bg-card text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background transition-colors"
              >
                Make a Donation
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-xl font-semibold border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
