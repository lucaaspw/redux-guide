import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      // Varificar se já está no carrinho
      const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id);
      // Se já estiver, aumente a sua quantidade em 1
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product)
        }
      }
      // Se não estiver adicione
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      }
    case CartActionTypes.INCREMENT_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product)
      }
    case CartActionTypes.DECREMENT_PRODUCT:
      return{
        ...state,
        products: state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity - 1} : product)
      }
    default:
      return state;
  }
}

export default cartReducer;