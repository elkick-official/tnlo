import { Form } from "antd";
import { useEffect, useRef, useState } from "react";
import { createNewFolder, deleteFile, getAllFoldersNFiles, initialGetAllFolders } from "../../api/legacy.api";
import { IBreadCrumbs, IcurrentFolderId, IFiles, IFolder } from "../../types/legacyData.types";
import { errorNotification, infoNotification } from "../../utils/notification.util";
import { fileUpload } from "../../api/uploadDoc.api";

const useLegacyDataDigitilization = () => {

    //create folder
    const [isNewFolder, setIsNewFolder] = useState(false);
    const inputRef = useRef(null);
    const [newFolderForm] = Form.useForm();

    //upload file
    const [uploadForm] = Form.useForm()
    const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
    const [tags, setTags] = useState([]);

    const [folders, setFolders] = useState<IFolder[]>(
        []
    );

    const [files, setFiles] = useState<IFiles[]>(
        []
    );

    const [currentFolderId, setCurrentFolderId] = useState<IcurrentFolderId>(null);
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumbs[]>([{ id: null, name: 'Home' }]);
    const [fileList, setFileList] = useState();
    const [isFileUploding, setIsFileUploding] = useState(false);
    const [isFetchFiles, setIsFetchFiles] = useState(false)
    const [searchVal, setSearchVal] = useState<string>("");
    const [selectedType, setselectedType] = useState();
    const [selectedModifyDate, setSelectedModifyDate] = useState();


    const handleTypeChange = (e) => {
        setselectedType(e)
    }



    const handleModifiedChange = () => {

    }

    const handleUploadCancel = () => {
        setIsOpenUploadModal(false)
    }

    const handleUploadCOpen = () => {
        setIsOpenUploadModal(true)
    }

    const handleChangeTags = (tags: any) => {
        setTags(tags);
    };

    const createFolder = async (name: string) => {

        // let count = 0;
        // const currentFoldersNFiles = folders?.filter(
        //     (data) => data?.parentId == currentFolderId
        // );

        // if (currentFoldersNFiles?.length) {
        //     const currentFolders = currentFoldersNFiles?.filter(
        //         (data) => data?.folderId ? true : false
        //     );

        //     currentFolders?.map((data) => {
        //         if (data?.folderName.includes(name)) {
        //             count++;
        //         }
        //     });
        // }

        // infoNotification("Creating...", 0, "bottomRight")

        // folderName: name + (count == 0 ? "" : ` (${count})`),

        const newFolder = {
            folderName: name,
            parentId: currentFolderId,
        };
        try {
            const data = await createNewFolder(newFolder)
            const res = data?.data
            if (res == undefined) {
                infoNotification("A folder with the same name already exists in this folder.")
            }

            if (data?.status == 201) {
                setFolders([...folders, res]);
            }
        } catch (error) {
            console.log(error)
            errorNotification("Something Went Wrong")
        }
    };


    const uploadFile = (file: any) => {
        // Handle file upload logic
    };

    const navigateToFolder = (fileId: string | number, fileName: string) => {
        const targetIndex = breadcrumbs.findIndex(
            (data: IBreadCrumbs) => data.id == fileId
        );

        if (targetIndex !== -1) {
            const newBreadCrumbs = breadcrumbs.slice(0, targetIndex + 1);
            setBreadcrumbs(newBreadCrumbs);
            setCurrentFolderId(fileId)
            return;
        }

        const areFoldersCached = folders?.filter((data) => data?.parentId == fileId)
        const areFilesCached = files?.filter((data) => data?.folderId == fileId)

        if (!areFoldersCached?.length && !areFilesCached?.length) {
            fetchAllFolderNFiles(fileId)
        }


        setBreadcrumbs([
            ...breadcrumbs,
            {
                id: fileId,
                name: fileName,
            },
        ]);
        setCurrentFolderId(fileId)
    };

    const handleOpenNewFolder = () => {
        setIsNewFolder(true);
    };

    const handleCreateFolderCancel = () => {
        newFolderForm.resetFields();
        setIsNewFolder(false);
    };

    const handleFinish = (values: any) => {
        if (values?.folderName) {
            createFolder(values?.folderName);
            handleCreateFolderCancel();
        }
    };

    const handleFilelist = (fileList: any) => {
        setFileList(fileList)
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value?.toLowerCase());
    };

    const fetchAllFolderNFiles = async (folderId: any) => {
        try {
            setIsFetchFiles(true)
            const res = await getAllFoldersNFiles(folderId)
            if (res?.folderId) {
                const newFolders = res?.subFolders ? res?.subFolders?.map((data: any) => {
                    return { ...data, parentId: folderId }
                }) : []


                const newFiles = res?.files || []

                setFolders([...folders, ...newFolders])
                setFiles([...files, ...newFiles])
            }
            setIsFetchFiles(false)

        } catch (error) {
            console.log(error)
            setIsFetchFiles(false)
        }
    }

    const handleUpload = async (selectedFileList: any, selectedFolderId: string) => {
        setIsFileUploding(true)
        const newList = [];
        const appendTags = tags.join(",")
        const params = {
            FolderId: selectedFolderId,
            TagData: appendTags,
            TypeId: 1,
            FileContent: ""
        }

        for (const [index, file] of Object.entries(selectedFileList)) {

            const formData = new FormData();
            formData.append('UploadedDocument', file.originFileObj
            );

            try {
                const data = await fileUpload(formData, params)
                const res = data?.data

                if (res == undefined) {
                    infoNotification("A file with the same name already exists in this folder.")
                }
                if (data?.status == 201) {
                    newList.push(res)
                }
            } catch (error) {
                console.log({ error })
            }

        }

        setFiles([...files, ...newList])
        setIsFileUploding(false)
        setTags([])
        setFileList([])
        setIsOpenUploadModal(false)
    }

    const handleDeleteFile = async (fileId: number, type: string) => {
        const obj = {
            folder: "Folders",
            file: "Files"
        }

        if (type == "folder") {
            const updatedFolders = folders?.filter(data => data?.folderId !== fileId)
            setFolders(updatedFolders)
        } else {
            const updatedFiles = files?.filter(data => data?.fileId !== fileId)
            setFiles(updatedFiles)
        }

        try {
            const res = await deleteFile(obj[type], fileId)

        } catch (error) {
            console.log(error)
        }
    }

    const initialFetchAllFolders = async () => {
        try {
            setIsFetchFiles(true)
            const res = await initialGetAllFolders()


            if (res.status == 200) {
                const data = res?.data
                setFolders([...data])
            }
            setIsFetchFiles(false)

        } catch (error) {
            console.log(error)
            setIsFetchFiles(false)
        }
    }

    useEffect(() => {
        if (isNewFolder) {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef?.current?.focus();
                    inputRef?.current?.select(); // Select the text in the input field
                }
            }, 100);
        }
    }, [isNewFolder]);

    useEffect(() => {
        // fetchAllFolderNFiles(currentFolderId)
        initialFetchAllFolders()
    }, [])


    let currentFolders = folders?.filter((data) => data?.parentId == currentFolderId)
    let currentFiles = files?.filter((data) => data?.folderId == currentFolderId && data?.typeName == "File")

    if (searchVal?.length) {
        currentFolders = currentFolders.filter((data) => data?.folderName?.toLowerCase().includes(searchVal))
        currentFiles = currentFiles?.filter((data) => data?.fileName?.toLowerCase().includes(searchVal))
    }

    if (selectedType) {
        currentFiles = currentFiles?.filter((data) => {

            if (selectedType?.includes("png")) {
                if (data?.fileName?.includes("png") || data?.fileName?.includes("jpg") || data?.fileName?.includes("jpeg")) {
                    return true
                }
                return false
            }

            if (data?.fileName?.includes(selectedType)) {
                return true
            }

            return false
        })
    }

    return {
        createFolder, uploadFile, navigateToFolder, currentFolderId, breadcrumbs,
        currentFolders,
        currentFiles,
        handleFinish,
        handleCreateFolderCancel,
        isNewFolder,
        newFolderForm,
        inputRef,
        handleOpenNewFolder,
        isOpenUploadModal,
        handleUploadCOpen,
        uploadForm,
        handleUploadCancel,
        handleChangeTags,
        fileList,
        handleUpload,
        handleFilelist,
        isFileUploding,
        isFetchFiles,
        handleDeleteFile,
        handleSearch,
        searchVal,
        selectedType,
        handleTypeChange,
        tags
    }

}

export default useLegacyDataDigitilization