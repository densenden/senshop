import medusaClient from "@/services/medusa";

/**
 * Fetch all products from the Medusa backend
 */
export async function getAllProducts() {
  try {
    const { products } = await medusaClient.products.list();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Fetch a product by ID from the Medusa backend
 */
export async function getProductById(id: string) {
  try {
    const { product } = await medusaClient.products.retrieve(id);
    return product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

/**
 * Fetch featured products from the Medusa backend
 * Using tags to identify featured products instead of a non-existent is_featured field
 */
export async function getFeaturedProducts() {
  try {
    // Get products with a "featured" tag
    const { products } = await medusaClient.products.list({
      tags: ["featured"],
    });
    return products;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
} 