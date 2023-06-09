import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Jaquemus',
                    lastName: 'Shulder',
                    areas: ['frontend', 'backeend', 'career'],
                    description: "I'm James adm I've worked as a freelance web developer for years",
                    hourlyRate:30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        }
     },
    mutations,
    actions,
    getters
}