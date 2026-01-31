"use client";

import { MapPin, Mail, Phone, CreditCard, Building2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="section-padding bg-card">
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
            Contact Us
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reach out to us for support, partnership, or to learn more about our
            rehabilitation programs. Your contribution can change lives.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="font-heading text-2xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Information
            </motion.h3>

            {/* Address */}
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground">
                  Behind Firstbank, Ojoo, Ibadan,
                  <br />
                  Oyo State, Nigeria
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a
                  href="mailto:jesuscarereformationcenter@gmail.com"
                  className="text-accent hover:text-primary transition-colors"
                >
                  jesuscarereformationcenter@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a
                  href="tel:+2348034659285"
                  className="text-accent hover:text-primary transition-colors"
                >
                  +234 803 465 9285 OR +234 802 306 3715
                </a>
              </div>
            </motion.div>

            {/* Map Embed Placeholder */}
            <motion.div
              className="bg-secondary rounded-2xl overflow-hidden h-64 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">
                  Behind Firstbank, Ojoo
                </p>
                <p className="text-muted-foreground">Ibadan, Oyo State</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Donation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-10 text-primary-foreground"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold">
                  Support Our Mission
                </h3>
              </motion.div>

              <motion.p
                className="text-primary-foreground/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Your generous donation helps us provide care, treatment, and
                rehabilitation services to those in need. Every contribution
                makes a difference in someone's journey to recovery.
              </motion.p>

              {/* Bank Details */}
              <motion.div
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-3 pb-4 border-b border-primary-foreground/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Bank Transfer Details</span>
                </motion.div>

                {/* Bank Name */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div>
                    <p className="text-sm text-primary-foreground/70">Bank Name</p>
                    <p className="font-semibold">First Bank of Nigeria</p>
                  </div>
                </motion.div>

                {/* Account Number */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <div>
                    <p className="text-sm text-primary-foreground/70">Account Number</p>
                    <p className="font-semibold font-mono text-lg">2042088053</p>
                  </div>
                  <motion.button
                    onClick={() => copyToClipboard("2042088053", "accNo")}
                    className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                    title="Copy account number"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copied === "accNo" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </motion.button>
                </motion.div>

                {/* Account Name */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <div>
                    <p className="text-sm text-primary-foreground/70">Account Name</p>
                    <p className="font-semibold text-sm leading-tight">
                      Jesus Care Reformation Center
                      <br />
                      For Drug Abuse And Misuse
                    </p>
                  </div>
                  <motion.button
                    onClick={() =>
                      copyToClipboard(
                        "Jesus Care Reformation Center For Drug Abuse And Misuse",
                        "accName"
                      )
                    }
                    className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                    title="Copy account name"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copied === "accName" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.p
                className="text-primary-foreground/70 text-sm mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                For inquiries about donations, please contact us via email.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
