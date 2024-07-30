import { useEffect, useRef, useState } from "react";
import { IBreadCrumbs, IcurrentFolderId, IFolder } from "../../types/legacyData.types";
import { Form } from "antd";

const useLegacyDataDigitilization = () => {

    //create folder
    const [isNewFolder, setIsNewFolder] = useState(false);
    const inputRef = useRef(null);
    const [newFolderForm] = Form.useForm();

    //upload file
    const [uploadForm] = Form.useForm()
    const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);


    const handleUploadCancel = () => {
        setIsOpenUploadModal(false)
    }

    const handleUploadCOpen = () => {
        setIsOpenUploadModal(true)
    }

    const [allFoldersNFiles, setFolders] = useState<IFolder[]>(
        [
            { id: 1, name: 'Hello', parentId: null, type: "folder", author: "Venkatesh" },
            { id: 2, name: 'Venky', parentId: null, type: "file", author: "Venkatesh" },
            { id: 3, name: 'New Foldzy', parentId: null, type: "folder", author: "Venkatesh" }
        ]
    );

    const [currentFolderId, setCurrentFolderId] = useState<IcurrentFolderId>(null);
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumbs[]>([{ id: null, name: 'Home' }]);

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


    const uploadFile = (file) => {
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

    const handleFinish = (values: FieldType) => {
        console.log("Form submitted with values:", values);

        if (values?.folderName) {
            createFolder(values?.folderName);
            handleCreateFolderCancel();
        }
    };

    useEffect(() => {
        if (isNewFolder) {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                    inputRef.current.select(); // Select the text in the input field
                }
            }, 100);
        }
    }, [isNewFolder]);


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
        handleUploadCancel
    }

}

export default useLegacyDataDigitilization