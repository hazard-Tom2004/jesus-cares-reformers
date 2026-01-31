"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, CreditCard, Building2, Copy, Check, Users, BookOpen, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const impactAreas = [
  {
    icon: Heart,
    title: "Treatment & Care",
    description: "Fund counseling sessions and medical care for recovering individuals.",
  },
  {
    icon: Users,
    title: "Community Reintegration",
    description: "Support programs that help recovered individuals return to society.",
  },
  {
    icon: BookOpen,
    title: "Vocational Training",
    description: "Enable skill development for sustainable livelihoods.",
  },
  {
    icon: Shield,
    title: "Awareness Campaigns",
    description: "Help spread education about drug abuse prevention.",
  },
];


const needs = [
  {
    description: "A 20 rooms hostel to house drug abusers",
  },
  {
    description: "A 24 seater bus to transport drug abusers",
  },
  {
    description: "100s of Bibles for drug abuser",
  },
];

export default function DonatePage() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your Donation Impact
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Every contribution directly supports our programs and the lives we transform.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-2xl border border-border hover:border-primary/30 card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          



 <motion.h2
              className="font-heading text-2xl text-center md:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Needs
            </motion.h2>
<div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
  {needs.map((area, index) => {
    // Define different border colors for each card
    const borderColors = [
      "border-l-blue-500",      // Blue
      "border-l-pink-500",      // Pink  
      "border-l-purple-500",    // Purple
      "border-l-indigo-500",    // Indigo
    ];
    
    // Fallback to last color if index exceeds array
    const borderColorClass = borderColors[index % borderColors.length];
    const bgColorClass = borderColorClass.replace('border-l-', 'bg-').replace('500', '500/10');
    const textColorClass = borderColorClass.replace('border-l-', 'text-');

    return (
      <motion.div
        key={index}
        className={`relative bg-background p-8 rounded-2xl border border-border hover:border-primary/30 card-hover overflow-hidden group ${borderColorClass} border-l-4`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -5 }}
      >
        {/* Color accent line - thicker on hover */}
        <div className={`absolute left-0 top-0 h-full w-1 ${borderColorClass.replace('500', '400')} group-hover:w-2 transition-all duration-300`}></div>
    
        {/* Centered description text */}
        <div className="flex items-center justify-center text-center min-h-[120px]">
          <p className="font-heading font-bold leading-relaxed">
            {area.description}
          </p>
        </div>

        {/* Hover gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>
    );
  })}
</div>





          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >

            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-primary-foreground">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">
                    Bank Transfer
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Make a direct donation to our account
                  </p>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-primary-foreground/20">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Bank Transfer Details</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-primary-foreground/70">Bank Name</p>
                    <p className="font-semibold text-lg">First Bank of Nigeria</p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-primary-foreground/10 rounded-xl p-4">
                  <div>
                    <p className="text-sm text-primary-foreground/70">Account Number</p>
                    <p className="font-bold font-mono text-2xl tracking-wider">2042088053</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("2042088053", "accNo")}
                    className="p-3 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-xl transition-colors"
                    title="Copy account number"
                  >
                    {copied === "accNo" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-primary-foreground/70">Account Name</p>
                    <p className="font-semibold leading-tight">
                      Jesus Care Reformation Center For Drug Abuse And Misuse
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "Jesus Care Reformation Center For Drug Abuse And Misuse",
                        "accName"
                      )
                    }
                    className="p-3 hover:bg-primary-foreground/20 rounded-xl transition-colors ml-4"
                    title="Copy account name"
                  >
                    {copied === "accName" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <p className="text-primary-foreground/70 text-sm mt-6 text-center">
                For inquiries about donations, please{" "}
                <Link href="/contact" className="underline hover:text-primary-foreground">
                  contact us
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Thank You for Your Generosity
          </h2>
          <p className="text-muted-foreground mb-8">
            Every donation, no matter the size, makes a significant impact in the
            lives of those we serve. Together, we can restore hope and rebuild
            lives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="text-primary font-semibold hover:text-accent transition-colors"
            >
              Learn more about us
            </Link>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <Link
              href="/gallery"
              className="text-primary font-semibold hover:text-accent transition-colors"
            >
              See our impact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
