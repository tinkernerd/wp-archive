import { getAlbumImages } from "./r2"; // Import only necessary function
import { getAlbums as fetchAlbums } from "./r2"; // Rename to prevent conflict

export async function getAlbums() {
  try {
    return await fetchAlbums(); // Dynamically fetch album names from R2
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
