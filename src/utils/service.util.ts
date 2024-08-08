export function getIdByType(type: string) {
    switch (type) {
        case 'notes':
            return 1;
        case 'ongoing':
            return 2;
        case 'court':
            return 3;
        case 'press':
            return 4;
        default:
            return null;
    }
}

export function getBtnNameByType(type: string) {
    switch (type) {
        case 'notes':
            return "Add New Note";
        case 'ongoing':
            return "Add Ongoing Issue";
        case 'court':
            return "Add Court Diary";
        case 'press':
            return "Add Press Note";
        default:
            return "Add New Note";
    }
}

export function getTitleNameByType(type: string) {
    switch (type) {
        case 'notes':
            return "Notes";
        case 'ongoing':
            return "Ongoing Issues";
        case 'court':
            return "Court Diary";
        case 'press':
            return "Press Notes";
        default:
            return "Add New Note";
    }
}