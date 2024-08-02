import { Form } from "antd";
import { useEffect, useRef, useState } from "react";
import { getAllFoldersNFiles } from "../../api/legacy.api";
import { IBreadCrumbs, IcurrentFolderId, IFolder } from "../../types/legacyData.types";

const useLegacyDataDigitilization = () => {

    //create folder
    const [isNewFolder, setIsNewFolder] = useState(false);
    const inputRef = useRef(null);
    const [newFolderForm] = Form.useForm();

    //upload file
    const [uploadForm] = Form.useForm()
    const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
    const [tags, setTags] = useState([]);


    const [allFoldersNFiles, setFolders] = useState<IFolder[]>(
        [
            { id: 1, name: 'Hello', parentId: 1, type: "folder", author: "Venkatesh" },
            { id: 2, name: 'Venky', parentId: 1, type: "file", author: "Venkatesh" },
            { id: 3, name: 'New Foldzy', parentId: 1, type: "folder", author: "Venkatesh" }
        ]
    );

    const [currentFolderId, setCurrentFolderId] = useState<IcurrentFolderId>(1);
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumbs[]>([{ id: null, name: 'Home' }]);
    const [fileList, setFileList] = useState();
    const [isFileUploding, setIsFileUploding] = useState(false);

    const handleUploadCancel = () => {
        setIsOpenUploadModal(false)
    }

    const handleUploadCOpen = () => {
        setIsOpenUploadModal(true)
    }

    const handleChangeTags = (tags: any) => {
        setTags(tags);
    };

    const createFolder = (name: string) => {
        const newFolder = {
            id: allFoldersNFiles.length + 1,
            name,
            parentId: currentFolderId,
            type: "folder",
            author: "Venkatesh"
        };

        setFolders([...allFoldersNFiles, newFolder]);
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
        console.log("Form submitted with values:", values);

        if (values?.folderName) {
            createFolder(values?.folderName);
            handleCreateFolderCancel();
        }
    };

    const handleFilelist = (fileList: any) => {
        setFileList(fileList)
    }

    const fetchAllFolderNFiles = async (folderId: any) => {
        try {
            const res = await getAllFoldersNFiles(folderId)
            console.log({ res })

        } catch (error) {
            console.log(error)
        }
    }

    const handleUpload = (selectedFileList: any, selectedFolderId: string) => {
        // setIsFileUploding(true)
        // console.log({ fileList, selectedFolderId, tags })
        // const newList = [];
        // for (const [index, file] of Object.entries(selectedFileList)) {
        //     const ext = file.name.substring(
        //         file.name.lastIndexOf(".") + 1,
        //         file.name.length
        //     );
        // }
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
        fetchAllFolderNFiles(currentFolderId)
    }, [])


    const currentFoldersNFiles = allFoldersNFiles?.filter((data) => data?.parentId == currentFolderId)
    const currentFolders = currentFoldersNFiles?.filter((data) => data?.type == "folder")
    const currentFiles = currentFoldersNFiles?.filter((data) => data?.type == "file")


    return {
        createFolder, uploadFile, navigateToFolder, allFoldersNFiles, currentFolderId, breadcrumbs,
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
    }

}

export default useLegacyDataDigitilization