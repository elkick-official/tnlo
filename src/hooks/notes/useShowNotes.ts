import { useMemo, useState } from "react";

export const useShowNotes = (allNotes: any[]) => {
    const [currentId, setCurrentId] = useState<any>();
    const [selectedValue, setSelectedValue] = useState<string | number | undefined>(undefined);

    const handleSelectChange = (value: string | number) => {
        setSelectedValue(value);
    };

    const sortedNotes = useMemo(() => {
        return [...allNotes].sort(
            (a: any, b: any) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime()
        );
    }, [allNotes]);


    return {
        currentId,
        setCurrentId,
        selectedValue,
        handleSelectChange,
        sortedNotes,
    };
};
