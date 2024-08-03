import create from 'zustand';

const useStore = create((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;


// const YourComponent = () => {
//     const count = useStore((state) => state.count);
//     const increaseCount = useStore((state) => state.increaseCount);
//     const decreaseCount = useStore((state) => state.decreaseCount);

//     return (
//         <div>
//         <h1>Count: { count } </h1>
//             < button onClick = { increaseCount } > Increase </>
//                 < button onClick = { decreaseCount } > Decrease </>
//                     </div>
//   );
// };