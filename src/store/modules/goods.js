const goods = {
    state: {
        goodsList: [],
        isScrolling: false
    },
    mutations: {
        UPDATE_GOODS_LIST(state, list) {
            state.goodsList = list
        },
        SET_GOODS_ISSCROLLING(state, isScrolling) {
            state.isScrolling = isScrolling
        }
    },
    actions: {
        updateScroll({
            commit
        }, isScrolling) {
            commit("SET_GOODS_ISSCROLLING", isScrolling)
        },
        initGoodsList({
            commit
        }, list) {
            commit("UPDATE_GOODS_LIST", list)
        },
        updateGoodsCount({
            state,
            commit
        }, goodsInfo) {
            let newList = JSON.parse(JSON.stringify(state.goodsList))
            let index = newList.findIndex(item => item.id == goodsInfo.id)
            newList[index].count = goodsInfo.count
            commit("UPDATE_GOODS_LIST", newList)
        },
        clearGoodsCount({
            state,
            commit
        }) {
            let newList = JSON.parse(JSON.stringify(state.goodsList))
            newList.forEach(item => {
                item.count = 0
            })
            commit("UPDATE_GOODS_LIST", newList)
        }
    }
}
export default goods