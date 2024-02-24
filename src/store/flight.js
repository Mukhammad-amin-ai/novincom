const state = () => {
    // return modalShow = false
}

const getters = {
    showFilter() {
        state.modalShow = true
        console.log(state.modalShow);
    }
}

export default {
    namespaced: true,
    state,
    getters
}