const getters = {
    goodsList: state => state.goods.goodsList,
    cartList: state => state.cart.cartList,
    isScrolling:state=>state.goods.isScrolling
}
export default getters