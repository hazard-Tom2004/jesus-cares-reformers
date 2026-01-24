"use server";

import cloudinary from "./cloudinary";

export async function getGalleryImages() {
  try {
    console.log("Fetching gallery images from Cloudinary...");
    
    const result = await cloudinary.search
      .expression("resource_type:image AND folder=Jesus_cares_reformers/*")
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    console.log("Gallery search result:", result);
    console.log("Resources found:", result.resources?.length || 0);

    return result.resources.map((image) => ({
      id: image.asset_id,
      url: image.secure_url,
      alt: image.public_id.split("/").pop()?.replace(/-/g, " "),
      width: image.width,
      height: image.height,
    }));
  } catch (error) {
    console.error("Failed to fetch gallery images:", error);
    return [];
  }
}