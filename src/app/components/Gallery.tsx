"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon, Plus } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

// Optimize Cloudinary URL for faster loading
const optimizeImageUrl = (url: string, width: number, quality: number = 80): string => {
  if (!url.includes("cloudinary")) return url;
  // Insert transformation parameters before the filename
  return url.replace(
    "/upload/",
    `/upload/w_${width},q_${quality},f_auto/`
  );
};

interface Props {
  images: GalleryImage[];
}

const GalleryClient = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const hasImages = images.length > 0;

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gallery
          </motion.span>
          <motion.h2
            className="font-heading text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Activities & Events
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Moments from our programs, outreach, and meetings.
          </motion.p>
        </motion.div>

        {hasImages ? (
          <>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-[4/3] bg-secondary rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src={optimizeImageUrl(image.url, 600)}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 3}
                  />
                </motion.div>
              ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <Image
                  src={optimizeImageUrl(selectedImage.url, 1200)}
                  alt={selectedImage.alt}
                  width={1200}
                  height={900}
                  className="max-w-4xl w-full rounded-xl object-contain"
                  priority
                />
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-secondary rounded-2xl flex flex-col items-center justify-center border border-dashed"
              >
                <Plus className="w-8 h-8 mb-2" />
                <p className="text-sm">Coming soon</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryClient;
