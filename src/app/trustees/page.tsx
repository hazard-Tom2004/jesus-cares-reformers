"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, CreditCard, Building2, Copy, Check, Users, BookOpen, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const trustees = [
    {
        name: "Chap Amb Daniel O. Collins",
        title: "Chairman Board of Trustees",
        image: "https://res.cloudinary.com/duhpmbxst/image/upload/v1769815479/WhatsApp_Image_2026-01-27_at_3.10.04_PM_dq7jyl.jpg",
    },
    {
        name: "Rev Dr Abraham Adeoye",
        title: "Secretary Board of Trustees",
        image: "https://res.cloudinary.com/duhpmbxst/image/upload/v1769815478/WhatsApp_Image_2026-01-27_at_3.29.07_PM_z4dcw5.jpg",
    },
    {
        name: "Mrs Linda Osita",
        title: "Board Member",
        image: "https://res.cloudinary.com/duhpmbxst/image/upload/v1769815479/WhatsApp_Image_2026-01-27_at_3.30.23_PM_jzuodd.jpg",
    },
    {
        name: "Prof. Stephen Anurudu",
        title: "Board Member",
        image: "https://res.cloudinary.com/duhpmbxst/image/upload/v1769815479/WhatsApp_Image_2026-01-27_at_3.32.09_PM_zepni5.jpg",
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

            <section className="section-padding bg-gradient-to-b from-card to-background">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <motion.h1
                            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Meet the Board of Trustees
                        </motion.h1>
                        <motion.p
                            className="text-muted-foreground max-w-2xl mx-auto text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Every contribution directly supports our programs and the lives we transform.
                        </motion.p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {trustees.map((trustee, index) => (
                            <motion.div
                                key={index}
                                className="group bg-background p-6 rounded-2xl border border-border hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Image Container */}
                                <div className="relative w-32 h-32 mb-6 group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70" />
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-lg group-hover:border-primary/50 transition-all duration-300">
                                        <Image
                                            src={trustee.image}
                                            alt={trustee.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    </div>
                                    {/* Badge for Chairman/Secretary */}
                                    {(trustee.title.includes("Chairman") || trustee.title.includes("Secretary")) && (
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                                            {trustee.title.includes("Chairman") ? "Chairman" : "Secretary"}
                                        </div>
                                    )}
                                </div>

                                {/* Name and Title */}
                                <div className="flex-grow">
                                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                        {trustee.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {trustee.title}
                                    </p>
                                </div>

                                {/* Decorative Elements */}
                                <div className="mt-4 pt-4 border-t border-border/50 w-full">
                                    <div className="flex justify-center space-x-2">
                                        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                                        <div className="w-2 h-2 rounded-full bg-secondary/30"></div>
                                        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Information Section */}
                    <motion.div
                        className="max-w-4xl mx-auto bg-gradient-to-r from-card to-background border border-border rounded-2xl p-8 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="md:w-1/4">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                    <Shield className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <div className="md:w-3/4 text-center md:text-left">
                                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                                    Governance & Leadership
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Our Board of Trustees provides strategic oversight and ensures that every donation is used effectively to transform lives. Each member brings decades of experience in leadership, education, and community development.
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Transparency</span>
                                    <span className="px-3 py-1 bg-secondary/10 text-primary rounded-full text-sm">Accountability</span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Impact Focus</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
}