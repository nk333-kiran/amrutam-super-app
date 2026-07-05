import { RootState } from "../../app/store/store";

export const selectProducts = (state: RootState) => state.shop.products;

export const selectCart = (state: RootState) => state.shop.cart;

export const selectWishlist = (state: RootState) => state.shop.wishlist;
