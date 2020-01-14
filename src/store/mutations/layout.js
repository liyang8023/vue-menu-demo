const layout = {
    state: {
        menuActive: '0-0'
    },
    mutations: {
        changeMenuActive: (state, index) => {
            console.log(index);
            state.menuActive = index;
        }
    }
}
export default layout;