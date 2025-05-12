/**
 * Application configuration 
 */
export const config = {
  // Medusa backend URL
  backendUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000",
  
  // Stripe public key
  stripeKey: process.env.NEXT_PUBLIC_STRIPE_KEY || "",
  
  // Medusa admin URL
  adminUrl: process.env.NEXT_PUBLIC_MEDUSA_ADMIN_URL || "http://localhost:7001",
};

/**
 * Function to get Medusa backend URL
 */
export function getBackendUrl(): string {
  return config.backendUrl;
}

/**
 * Function to get Stripe public key
 */
export function getStripeKey(): string {
  return config.stripeKey;
}

/**
 * Function to get Medusa admin URL
 */
export function getAdminUrl(): string {
  return config.adminUrl;
} 