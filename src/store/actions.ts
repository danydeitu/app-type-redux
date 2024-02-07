// actions.ts
export const INCREMENT = 'INCREMENT';

export interface IncrementAction {
  type: typeof INCREMENT;
}

export const increment = (): IncrementAction => ({
  type: INCREMENT,
});
