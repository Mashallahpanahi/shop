
"use client"
import { createContext, useContext, useState } from "react";

type ShoppingContextProviderProps = {
    children: React.ReactNode
}

type CartItem = {
    id: number,
    qty: number
}

type TShoppingContext = {
    cartItems: CartItem[],
    handleIncreaseProductQty: (id: number) => void,
    handleDecreaseProductQty: (id: number) => void
    , getProductQty: (id: number) => number,
    cartTotalQty: number,
    handleRemoveProduct: (id: number) => void


}

const ShoppingContext = createContext({} as TShoppingContext);

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
}

export function ShoppingContextProvider({ children }: ShoppingContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);


    const getProductQty = (id: number) => {
        return cartItems.find(item => item.id == id)?.qty || 0
    }

    const cartTotalQty = cartItems.reduce((totalQty, item) => {
        return totalQty + item.qty
    }, 0)

    const handleRemoveProduct = (id: number) => {
        setCartItems(currentItem => {
            return currentItem.filter(item => item.id != id)
        })
    }


    const handleIncreaseProductQty = (id: number) => {
        setCartItems(currentItems => {
            const itemExists = currentItems.find(item => item.id === id);
            if (!itemExists) {
                return [...currentItems, { id, qty: 1 }];
            } else {
                return currentItems.map(item =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                );
            }
        });
    };


    const handleDecreaseProductQty = (id: number) => {
        setCartItems(currentItems => {
            const itemExists = currentItems.find(item => item.id === id);

            // If item does not exist, do nothing
            if (!itemExists) return currentItems;

            // If qty is 1, removing it completely
            if (itemExists.qty === 1) {
                return currentItems.filter(item => item.id !== id);
            }

            // Otherwise, just decrease the qty
            return currentItems.map(item =>
                item.id === id ? { ...item, qty: item.qty - 1 } : item
            );
        });
    };



    return (
        //poss the function across the pages to be accessable  
        <ShoppingContext.Provider value={{ cartItems, handleIncreaseProductQty, handleDecreaseProductQty, getProductQty, cartTotalQty, handleRemoveProduct }}>
            {children}
        </ShoppingContext.Provider>
    );
}
