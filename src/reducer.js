export const initialState = {
    basket: [],
    user: null,
  };
  
  export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        };
  
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, { ...action.item, uniqueId: `${action.item.id}-${state.basket.length}` }],
        };
  
      case 'REMOVE_FROM_BASKET':
        const index = state.basket.findIndex(
          (basketItem) => basketItem.uniqueId === action.uniqueId
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(`Cannot remove product (uniqueId: ${action.uniqueId}) as it's not in basket!`);
        }
  
        return {
          ...state,
          basket: newBasket,
        };
  
      // other cases...
  
      default:
        return state;
    }
  };
  
  export default reducer;
  