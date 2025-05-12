import Medusa from "@medusajs/medusa-js";
import { getBackendUrl } from "@/lib/utils/config";

// Create a Medusa client
const medusaClient = new Medusa({
  baseUrl: getBackendUrl(),
  maxRetries: 3,
});

export default medusaClient; 