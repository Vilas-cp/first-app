import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Constants from "expo-constants";




const client = createClient({
    projectId: "zm4lop5n", 
    dataset: "production", 
    useCdn: true, 
    apiVersion: "2021-10-21", 
});


// Initialize the Image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const uriFor = (source) => builder.image(source);

export default client;
