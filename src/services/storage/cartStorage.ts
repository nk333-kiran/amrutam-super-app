const cartStorage = {
  save(cart: unknown) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  },

  load() {
    if (typeof localStorage === "undefined") {
      return [];
    }

    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  },
};

export default cartStorage;
