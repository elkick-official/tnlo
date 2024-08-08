export function getIdByType(type: string) {
    switch (type) {
        case 'Notes':
            return 2;
        case 'Ongoing Issue':
            return 3;
        case 'court':
            return 3;
        case 'Press Notes / Articles / Others':
            return 4;
        default:
            return null;
    }
}

export function getBtnNameByType(type: string) {
    switch (type) {
        case 'Notes':
            return "Add New Note";
        case 'Ongoing Issue':
            return "Add Ongoing Issue";
        case 'court':
            return "Add Court Diary";
        case 'Press Notes / Articles / Others':
            return "Add Press Note";
        default:
            return "Add New Note";
    }
}

export function getTitleNameByType(type: string) {
    switch (type) {
        case 'Notes':
            return "Notes";
        case 'Ongoing Issue':
            return "Ongoing Issues";
        case 'court':
            return "Court Diary";
        case 'Press Notes / Articles / Others':
            return "Press Notes";
        default:
            return "Add New Note";
    }
}