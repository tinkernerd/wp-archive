import { getAlbumImages } from "./r2"; // Import only necessary function
import { getAlbums as fetchAlbums } from "./r2"; // Rename to prevent conflict

const ACCEPTABLE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp']; // Define acceptable image formats

export async function getAlbums() {
  try {
    const rawAlbums = await fetchAlbums(); // Dynamically fetch album names from R2

    // Filter albums to exclude ones with one or zero acceptable images
    const filteredAlbums = (
      await Promise.all(
        rawAlbums.map(async (album) => {
          const images = await getAlbumImages(album);
          
          // Filter images to only include acceptable formats
          const filteredImages = images.filter(image => {
            const extension = image.split('.').pop()?.toLowerCase();
            return extension && ACCEPTABLE_EXTENSIONS.includes(extension);
          });
          
          return filteredImages.length > 1 ? album : null;
        })
      )
    ).filter((album): album is string => album !== null);

    return filteredAlbums;
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
}

export async function getImages(album: string) {
  try {
    return await getAlbumImages(album); // Fetch images dynamically
  } catch (error) {
    console.error(`Error fetching images for album ${album}:`, error);
    return [];
  }
}