"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryPreviewProps {
  images: GalleryImage[];
}

const GalleryPreview = ({ images = [] }: GalleryPreviewProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasImages = images.some((img) => img.url !== "");

  useEffect(() => {
    if (!hasImages) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) %images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [hasImages]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };



  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
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
            Activities & Events
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore Our Activities
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how we're making a difference in our community through our
            rehabilitation programs, outreach events, and vocational training.
          </motion.p>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative aspect-[4/1.5] bg-muted rounded-3xl overflow-hidden shadow-soft">
            {hasImages ? (
              <>
                {/* Slides */}
                {images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-primary-foreground text-xl font-heading font-semibold">
                        {image.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Navigation Arrows */}
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </>
            ) : (
              /* Placeholder State */
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-muted"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center mb-6 shadow-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <ImageIcon className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Coming Soon
                </h3>
                <p className="text-muted-foreground text-center max-w-sm px-4">
                  Our gallery of activities and events will be available soon.
                  Stay tuned for updates!
                </p>
                
                {/* Animated placeholder slides */}
                <motion.div
                  className="flex gap-3 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                >
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className={`rounded-full transition-all ${
                        i === currentSlide % 4
                          ? "bg-primary w-8"
                          : "bg-border w-3 h-3"
                      }`}
                      animate={{
                        width: i === currentSlide % 4 ? 32 : 12,
                        height: 12,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/gallery">
            <motion.div
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent transition-all duration-300 hover:shadow-soft group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Gallery
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
