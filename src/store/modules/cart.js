const cart = {
    state: {
        cartList: []
    },
    mutations: {
        UPDATE_CART_LIST(state, list) {
            state.cartList = list
        }
    },
    actions: {
        updateCartCount({
            state,
            commit
        }, goods) {
            let newList = JSON.parse(JSON.stringify(state.cartList))
            let index = newList.findIndex(item => item.id == goods.id)
            if (goods.count === 0) {
                if (index !== -1) {
                    newList.splice(index, 1)
                }
            } else {
                if (index === -1) {
                    newList.push(goods)
                } else {
                    newList.splice(index, 1, goods)
                }
            }
            commit("UPDATE_CART_LIST", newList)
        },
      
        clearCartCount({
            commit
        }) {
            commit("UPDATE_CART_LIST", [])
        }
    }
}
export default cart