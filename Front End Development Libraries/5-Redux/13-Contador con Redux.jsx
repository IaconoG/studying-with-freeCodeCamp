const INCREMENT = 'INCREMENT'; // Define una constante para acciones de incremento
const DECREMENT = 'DECREMENT'; // Define una constante para acciones de decremento

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}; // Define el reductor counter que aumentará o disminuirá el estado en función de la acción que reciba

const incAction = () => {
  return {
    type: INCREMENT
  }
}; // Define un creador de acción para incrementar

const decAction = () => {
  return  {
    type: DECREMENT
  }
}; // Define un creador de acción para decrementar

const store = Redux.createStore(counterReducer); // Define el store de Redux aquí, pasando tus reductores