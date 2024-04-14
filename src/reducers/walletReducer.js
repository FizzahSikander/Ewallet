const initialState = {
    cards: JSON.parse(localStorage.getItem('creditCard')) || [],
    active: JSON.parse(localStorage.getItem('activeCard')) || {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CREDITCARDS':
        const updatedCards = [...state.cards, action.payload];
        localStorage.setItem('creditCard', JSON.stringify(updatedCards));
        return {
          ...state,
          cards: updatedCards,
        };
  
      case 'ADD_TO_ACTIVE':
        localStorage.setItem('activeCard', JSON.stringify(action.payload));
        return {
          ...state,
          active: action.payload,
        };
  
      case 'REMOVE':
        const filteredCards = state.cards.filter((card) => card.cardId !== action.payload.cardId);
        localStorage.setItem('creditCard', JSON.stringify(filteredCards));
        return {
          ...state,
          cards: filteredCards,
        };
  
      case 'REMOVE_FROM_ACTIVE':
        const activeCard = JSON.parse(localStorage.getItem('activeCard'));
        if (activeCard && activeCard.cardId === action.payload.cardId) {
          localStorage.removeItem('activeCard');
          return {
            ...state,
            active: {},
          };
        }
        return state;
  
      default:
        return state;
    }
  };
  
  export default reducer;
  