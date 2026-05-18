import { persist } from "zustand/middleware";
import { create } from "zustand";

export const useCart = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => {
                const items = get().cart;
                const existing = items.find((item) => item.id === product.id);
                if (existing) {
                    set({
                        cart: items.map((item) =>
                            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                        ),
                    });
                } else {
                    set({ cart: [...items, { ...product, qty: 1 }] });
                }
            },
            removeFromCart: (id, set,) => {
                const items = get().cart;
                const existing = items.find((item) => item.id === product.id);
                if (existing) {
                    set({
                        cart: items.map((item) =>
                            item.id === product.id ? { ...item, qty: item.qty - 1 } : item
                        ),
                    });
                } else {
                    set({ cart: [...items, { ...product, qty: 1 }] });
                }
                set({ cart: get().cart.filter((item) => item.id !== id) });
            },
            decreaseQty: (id) => {
                set({
                    cart: get().cart
                        .map((item) =>
                            item.id === id ? { ...item, qty: item.qty - 1 } : item
                        )
                        .filter((item) => item.qty > 0),
                });
            },
            clearCart: () => set({ cart: [] }),
        }),
        { name: "cart-items" }
    )
);

export default useCart;