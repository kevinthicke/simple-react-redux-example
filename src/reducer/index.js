import { INCREASE, DECREASE } from "../actions/types";

export default (state, action) => {
    const count = state.count
    switch (action.type) {
      case INCREASE:
        return { count: count + 1 };
      case DECREASE:
        return { count: count - 1 };
      default:
        return state
    }
  }