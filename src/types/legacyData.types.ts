export interface IFolder {
    id: number | null;
    name: string;
    parentId?: null | string | number | undefined;
    type?: string;
    author?: string
}

export type IcurrentFolderId = string | number | null | undefined

export interface IBreadCrumbs {
    id: string | null | number;
    name: string
}


export interface INewFolderFieldType {
    folderName: string
}