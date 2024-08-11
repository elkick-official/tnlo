import { create } from "zustand";

const notesStore = create((set) => ({
    notesFolderParams: {
        "notes": "",
        "on-going-issue": "",
        "court-dairy": "",
        "press-notes": ""
    },
    setNotesFolderParams: (paramDetails: any) => set({ userDetails: paramDetails }),
    clearNotesFolderParams: () => set({ notesFolderParams: {} }),
}));

export default notesStore;