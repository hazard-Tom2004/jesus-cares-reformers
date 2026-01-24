import { getGalleryImages } from "@/lib/getGalleryImg";
import GalleryClient from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      <Navbar />
      <GalleryClient images={images} />
      <Footer />
    </>
  );
}
