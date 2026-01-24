"use client";

import { Target, Shield, Users, BookOpen, Megaphone, Globe } from "lucide-react";
import { motion } from "framer-motion";

const objectives = [
  {
    icon: Target,
    title: "Care & Treatment",
    description:
      "To provide care, treatment and rehabilitation for drug dependent persons.",
  },
  {
    icon: Shield,
    title: "Risk Reduction",
    description:
      "To help those dependent on drugs to stop and to reduce the risk they pose to themselves and others.",
  },
  {
    icon: Users,
    title: "Reintegration",
    description:
      "To assist in the proper reintegration and adjustment of treated drug dependent persons into their families and communities.",
  },
  {
    icon: BookOpen,
    title: "Vocational Training",
    description:
      "To build institutional capacity necessary to render vocational training and teach social skills to drug dependent persons and groups at risk.",
  },
  {
    icon: Megaphone,
    title: "Public Awareness",
    description:
      "To reduce the demand for drugs by providing factual information to the public, especially to groups at risk.",
  },
  {
    icon: Globe,
    title: "Partnerships",
    description:
      "To relate with local and international organizations and government institutions for the realization of our objectives.",
  },
];

const About = () => {


  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Mission & Objectives
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            As a registered Non-Governmental Organization (CAC/IT/NO 180931), we
            are committed to transforming lives through comprehensive
            rehabilitation services and community support.
          </motion.p>
        </motion.div>

        {/* Objectives Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/30 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <objective.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {objective.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {objective.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Organization Info */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-primary-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Incorporated & Registered
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Jesus Care Reformation Center for Drug Abuse and Misuse was
                officially registered with the Corporate Affairs Commission on
                May 23, 2022. We operate as an Incorporated Trustee with a Board
                of Trustees overseeing our operations.
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { label: "Registration No.", value: "180931" },
                  { label: "Est.", value: "May 2022" },
                  { label: "Type", value: "NGO" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm opacity-80">{item.label}</span>
                    <p className="font-semibold">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-heading text-xl font-bold mb-4">
                Our Sources of Support
              </h4>
              <ul className="space-y-3">
                {[
                  "Donations from individuals and corporate bodies",
                  "Grants, aids and assistance from organizations",
                  "Member contributions and special levies",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mt-2" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
