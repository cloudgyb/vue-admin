export default {
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++
        }
    },
    actions: {
        delayAdd(context) {
            setTimeout(() => {
                context.commit('add')
            }, 1000);
        }
    }
}