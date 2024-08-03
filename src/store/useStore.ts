import { create } from "zustand";

const useDetailStore = create((set) => ({
  userDetails: {},
  setUserDetails: (newUser) => set({ userDetails: newUser }),
}));

export default useDetailStore;

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
