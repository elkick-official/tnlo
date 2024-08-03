export interface IFolder {
    folderId: number;
    folderName: string;
    parentId?: null | string | number | undefined;

}

export interface IFiles {
    fileContent: string;
    fileId: number;
    fileName: string;
    fileVersionId: null | number
    folderId: number;
    folderName: string;
    sysFileName: string
    tagData: string
}

export type IcurrentFolderId = string | number | null | undefined

export interface IBreadCrumbs {
    id: string | null | number;
    name: string
}


export interface INewFolderFieldType {
    folderName: string
}