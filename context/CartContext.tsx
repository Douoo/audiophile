"use client";
import React, { useCallback, useContext, useReducer } from "react";
//Create the interface the cart

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  itemCount: number;
  totalPrice: number;
  addToCart: (data: CartAddPayload) => void;
  removeFromCart: (id: number) => void;
  removeAll: () => void;
}

const initialState: CartState = {
  cartItems: [],
  itemCount: 0,
  totalPrice: 0.0,
  addToCart: (data: CartAddPayload) => {},
  removeFromCart: (id: number) => {},
  removeAll: () => {},
};

export const CartContext = React.createContext<CartState>(initialState);

//Define the relevant actions
enum CartActionType {
  ADD,
  REMOVE,
  REMOVE_ALL,
}
export interface CartAddPayload {
  item: CartItem;
  quantity: number;
}

type CartAction = {
  type: CartActionType;
  payload?: CartAddPayload | number;
};

//Create the logic
const cartReducer = (state: CartState, action: CartAction) => {
  console.log("cartReducer Called");
  console.log(action.payload);
  let items: CartItem[];
  let itemIndex: number;
  let totalPrice: number;
  switch (action.type) {
    case CartActionType.ADD:
      //Check if the item is not in the list add it
      const addedItem = (action.payload as CartAddPayload).item;
      const itemQty = (action.payload as CartAddPayload).quantity;

      console.log("Clicked on add");
      items = [...state.cartItems];
      itemIndex = items.findIndex((item) => item.id == addedItem.id);
      if (itemIndex !== -1) {
        let itemFound = state.cartItems[itemIndex];
        const updatedItem = {
          ...itemFound,
          quantity: itemFound.quantity + itemQty,
        };

        items[itemIndex] = updatedItem;
      } else {
        addedItem.quantity = itemQty;
        items.push(addedItem);
        // totalPrice = state.totalPrice + addedItem.price;
      }
      console.log("itemss", items);
      totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity!,
        0
      );
      const itemCount: number = items.reduce(
        (acc, item) => acc + item.quantity!,
        0
      );
      console.log("Cart state", {
        ...state,
        cartItems: items,
        itemCount,
        totalPrice,
      });
      return {
        ...state,
        cartItems: items,
        itemCount,
        totalPrice,
      };
    case CartActionType.REMOVE_ALL:
      //Remove all items in cart
      return {
        ...state,
        itemCount: 0,
        totalPrice: 0.0,
        cartItems: [],
      };
    case CartActionType.REMOVE:
      items = [...state.cartItems];
      itemIndex = items.findIndex(
        (item) => item.id == (action.payload as number)
      );
      if (items[itemIndex].quantity > 1) {
        const itemFound = items[itemIndex];
        const updatedItem = { ...itemFound, quantity: itemFound.quantity - 1 };
        items[itemIndex] = updatedItem;
      } else {
        items = items.filter((item) => item.id !== items[itemIndex].id);
      }
      totalPrice = state.totalPrice - items[itemIndex].price;
      return {
        ...state,
        cartItems: items,
        itemCount: state.itemCount--,
        totalPrice,
      };
  }
};

export function CartProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = useCallback((data: CartAddPayload) => {
    dispatch({ type: CartActionType.ADD, payload: data });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    dispatch({ type: CartActionType.REMOVE, payload: id });
  }, []);

  const removeAll = useCallback(() => {
    dispatch({ type: CartActionType.REMOVE_ALL });
  }, []);
  const value: CartState = {
    ...cartState,
    addToCart,
    removeFromCart,
    removeAll,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
