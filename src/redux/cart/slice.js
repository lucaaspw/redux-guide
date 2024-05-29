import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductCart: (state, action) => {
      // Varificar se já está no carrinho
      const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id);
      // Se já estiver, aumente a sua quantidade em 1
      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id ?
            { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }
      // Se não estiver adicione
      state.products = [...state.products, { ...action.payload, quantity: 1 }];

    },
    incrementProductCart: (state, action) => {
      state.products = state.products.map(product => product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product);
    },
    decrementProductCart: (state, action) => {
      state.products = state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity - 1} : product);
    },
    removeProductCart: (state, action) => {
      state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
    }
  }
});

export const { addProductCart, incrementProductCart, decrementProductCart, removeProductCart } = cartSlice.actions;

export default cartSlice.reducer;