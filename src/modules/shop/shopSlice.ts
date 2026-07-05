import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateProducts } from "./mockProducts";
import { CartItem } from "./types";

type ShopState = {
  products: ReturnType<typeof generateProducts>;
  cart: CartItem[];
  wishlist: string[];
  search: string;
  filter: string | null;
  sort: string | null;
};

const initialState: ShopState = {
  products: generateProducts(),
  cart: [],
  wishlist: [],
  search: "",
  filter: null,
  sort: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    setFilter(state, action: PayloadAction<string | null>) {
      state.filter = action.payload;
    },

    setSort(state, action: PayloadAction<string | null>) {
      state.sort = action.payload;
    },

    addToCart(state, action: PayloadAction<string>) {
      const existing = state.cart.find((item) => item.productId === action.payload);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ productId: action.payload, quantity: 1 });
      }
    },

    updateQuantity(
      state,
      action: PayloadAction<{
        productId: string;
        quantity: number;
      }>
    ) {
      const item = state.cart.find((x) => x.productId === action.payload.productId);

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.productId !== action.payload);
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find((x) => x.productId === action.payload);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((x) => x.productId !== action.payload);
      }
    },

    toggleWishlist(state, action: PayloadAction<string>) {
      const exists = state.wishlist.includes(action.payload);

      if (exists) {
        state.wishlist = state.wishlist.filter((id) => id !== action.payload);
      } else {
        state.wishlist.push(action.payload);
      }
    },
  },
});

export const {
  setSearch,
  setFilter,
  setSort,
  addToCart,
  updateQuantity,
  removeFromCart,
  decreaseQuantity,
  toggleWishlist,
} = shopSlice.actions;

export default shopSlice.reducer;
