import create from 'zustand';

export const [useState] = create(set => ({ 
    count: 0,
    ScrollBriefe: 1,
    increase: () =>
        set(state => ({
            count: state.count + 1
        }))
}))


// function List() {
//     const useStore = create(set => ({
//         bears: 0,
//         BriefeScrollPos: 0,
//         increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
//         removeAllBears: () => set({ bears: 0 })
//       }))
// }
// export default List;