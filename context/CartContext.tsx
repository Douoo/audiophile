"use client";
import React, { useReducer } from "react";
//Create the interface the cart

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

interface CartState {
  cartItems: CartItem[];
  itemCount: number;
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  removeAll: () => void;
}

const initialState: CartState = {
  cartItems: [],
  itemCount: 0,
  totalPrice: 0.0,
  addToCart: (item: CartItem) => {},
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

type CartAction = {
  type: CartActionType;
  payload?: CartItem | number;
};

//Create the logic
const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD:
      //Check if the item is not in the list add it
      const addedItem = action.payload! as CartItem;
      let items = [...state.cartItems];
      let itemFound = items.findIndex((item) => item.id == addedItem.id);
      let prevItemCount = state.itemCount;

      const itemCount: number = items.reduce(
        (acc, item) => acc + item.quantity!,
        prevItemCount
      );

      let totalPrice: number;
      if (itemFound !== -1) {
        items[itemFound].quantity! = addedItem.quantity!;
        totalPrice = items.reduce(
          (acc, item) => acc + item.price * item.quantity!,
          0
        );

        return {
          ...state,
          cartItems: items,
          itemCount,
        };
      } else {
        items.push(addedItem);
        totalPrice = state.totalPrice + addedItem.price;
        return {
          ...state,
          cartItems: items,
          itemCount: items.length,
          totalPrice,
        };
      }
    case CartActionType.REMOVE_ALL:
      //Remove all items in cart
      return {
        ...state,
        itemCount: 0,
        totalPrice: 0.0,
        cartItems: [],
      };
    case CartActionType.REMOVE:
      items = state.cartItems;
      itemFound = items.findIndex(
        (item) => item.id == (action.payload as number)
      );
      totalPrice = state.totalPrice - items[itemFound].price;
      return {
        ...state,
        cartItems: items.filter((item) => item.id !== items[itemFound].id),
        itemCount: state.itemCount--,
        totalPrice,
      };
  }
};

export function CartProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (item: CartItem) => {
    dispatch({ type: CartActionType.ADD, payload: item });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: CartActionType.REMOVE, payload: id });
  };

  const removeAll = () => {
    dispatch({ type: CartActionType.REMOVE_ALL });
  };

  const value: CartState = {
    ...cartState,
    addToCart,
    removeFromCart,
    removeAll,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
