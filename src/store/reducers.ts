import { RootState } from './types';
import { INCREMENT, IncrementAction } from './actions';

const initialState: RootState = {
  contador: 0,
};

const contadorReducer = (
  state = initialState,
  action: IncrementAction
): RootState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        contador: state.contador + 1,
      };
    default:
      return state;
  }
};

export default contadorReducer;
