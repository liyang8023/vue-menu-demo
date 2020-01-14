const test = {
    state: {
        people: [
            {name: 'shanshan', age: '18', sex: '0', id: '1qazxsw23edcvfr4'},
            {name: 'dahuo', age: '20', sex: '1', id: '2wsxcde34rfvbgt5'}
        ]
    },
    getters: {
        addNationality (state) {
            state.people.forEach(item => {
                item.nationality = 'china';
            })
            return state.people;
        }
    },
    mutations: {
        deletePeople (state, id) {
            state.people.forEach((item, index) => {
                if (item.id === id) {
                    state.people.splice(index, 1)
                }
            })
        },
        addPeople (state, people) {
            if (people) {
                state.people.push(people);
            }
        } 
    },
    actions: {   // 异步操作
        addPeople (context, item) {
            context.commit('addPeople', item);
        }
    }
}
export default test;
