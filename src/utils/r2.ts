import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const BUCKET_NAME = import.meta.env.CLOUDFLARE_R2_BUCKET_NAME;
const PUBLIC_URL = import.meta.env.CLOUDFLARE_R2_PUBLIC_URL;
const ENDPOINT = import.meta.env.CLOUDFLARE_R2_ENDPOINT;
const ACCESS_KEY_ID = import.meta.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = import.meta.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;

// Ensure environment variables are correctly loaded
if (!BUCKET_NAME || !PUBLIC_URL || !ENDPOINT || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
  throw new Error("Missing required Cloudflare R2 environment variables.");
}

const client = new S3Client({
  region: "auto",
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

/**
 * Fetch all albums (subfolders inside `wp/album/`).
 */
export async function getAlbums(): Promise<string[]> {
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Delimiter: "/",
      Prefix: "wp/",
    });

    const { CommonPrefixes } = await client.send(command);

    if (!CommonPrefixes) {
      //console.log("No albums found in Cloudflare R2.");
      return [];
    }

    const albums = CommonPrefixes
      .map((prefix) => prefix.Prefix?.replace("wp/", "").replace("/", "")) // Remove "wp/" prefix
      .filter((album): album is string => typeof album === "string" && album.length > 0);

    //console.log("Albums retrieved from R2:", albums);
    return albums;
  } catch (error) {
    //console.error("Error fetching albums from R2:", error);
    return [];
  }
}


/**
 * Fetch images for a given album.
 */
export async function getAlbumImages(album: string): Promise<string[]> {
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: `wp/${album}/`, // Fetching images inside the album
    });

    const { Contents } = await client.send(command);

    //console.log(`Raw R2 response for album "${album}":`, Contents); // Debug log

    if (!Contents || Contents.length === 0) {
      //console.log(`No images found in album: ${album}`);
      return [];
    }

    const images = Contents.map((file) => `${PUBLIC_URL}/${file.Key}`);
    //console.log(`Images found for album "${album}":`, images); // Debug log
    return images;
  } catch (error) {
    //console.error(`Error fetching images for album "${album}" from R2:`, error);
    return [];
  }
}
