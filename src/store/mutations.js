import {ADD_COUNT, ADD_CART_LIST} from "./mutations-types.js";

export default {
  [ADD_COUNT](state, payload){
    payload.count += 1;
  },
  [ADD_CART_LIST](state, payload){
    payload.checked = true;
    state.cartList.push(payload);
  }
}
