import {ADD_COUNT, ADD_CART_LIST} from "./mutations-types.js";

export default {
  addCart(context, payload){
    console.log(payload)
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

      if(oldProduct) {
        context.commit(ADD_COUNT, oldProduct);
        resolve("商品数量+1");
      }else {
        payload.count = 1;
        context.commit(ADD_CART_LIST, payload);
        resolve("商品已添加到购物车");
      }
    })
  }
}
