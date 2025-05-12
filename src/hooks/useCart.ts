import { useEffect, useState } from "react";
import medusaClient from "@/services/medusa";

// Cart item interface
interface LineItem {
  id: string;
  title: string;
  quantity: number;
  variant_id: string;
  unit_price: number;
  subtotal: number;
}

// Cart interface
interface Cart {
  id: string;
  items: LineItem[];
  total: number;
  subtotal: number;
  region_id: string;
}

/**
 * Custom hook for cart management
 */
export function useCart() {
  const [cartId, setCartId] = useState<string | null>(null);
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Initialize or retrieve cart
  useEffect(() => {
    const storedCartId = localStorage.getItem("cartId");
    if (storedCartId) {
      setCartId(storedCartId);
      fetchCart(storedCartId);
    }
  }, []);

  // Fetch cart data
  const fetchCart = async (id: string) => {
    try {
      setLoading(true);
      const { cart } = await medusaClient.carts.retrieve(id);
      setCart(cart as Cart);
      setLoading(false);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  };

  // Create a new cart
  const createCart = async () => {
    try {
      setLoading(true);
      const { cart } = await medusaClient.carts.create();
      setCart(cart as Cart);
      setCartId(cart.id);
      localStorage.setItem("cartId", cart.id);
      setLoading(false);
      return cart as Cart;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      return null;
    }
  };

  // Add an item to the cart
  const addItem = async (variantId: string, quantity: number) => {
    try {
      setLoading(true);
      
      // Create cart if it doesn't exist
      if (!cartId || !cart) {
        const newCart = await createCart();
        if (!newCart) {
          setLoading(false);
          return null;
        }
        
        const { cart: updatedCart } = await medusaClient.carts.lineItems.create(newCart.id, {
          variant_id: variantId,
          quantity: quantity,
        });
        
        setCart(updatedCart as Cart);
        setLoading(false);
        return updatedCart as Cart;
      }
      
      // If cart already exists
      const { cart: updatedCart } = await medusaClient.carts.lineItems.create(cart.id, {
        variant_id: variantId,
        quantity: quantity,
      });
      
      setCart(updatedCart as Cart);
      setLoading(false);
      return updatedCart as Cart;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      return null;
    }
  };

  // Remove an item from the cart
  const removeItem = async (lineItemId: string) => {
    if (!cartId) return;
    
    try {
      setLoading(true);
      const { cart: updatedCart } = await medusaClient.carts.lineItems.delete(cartId, lineItemId);
      setCart(updatedCart as Cart);
      setLoading(false);
      return updatedCart as Cart;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      return null;
    }
  };

  // Update item quantity
  const updateItemQuantity = async (lineItemId: string, quantity: number) => {
    if (!cartId) return;
    
    try {
      setLoading(true);
      const { cart: updatedCart } = await medusaClient.carts.lineItems.update(cartId, lineItemId, {
        quantity,
      });
      setCart(updatedCart as Cart);
      setLoading(false);
      return updatedCart as Cart;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      return null;
    }
  };

  // Empty the cart
  const emptyCart = () => {
    localStorage.removeItem("cartId");
    setCartId(null);
    setCart(null);
  };

  return {
    cart,
    loading,
    error,
    addItem,
    removeItem,
    updateItemQuantity,
    emptyCart,
  };
} 