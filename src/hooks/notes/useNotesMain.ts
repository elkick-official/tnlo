import { useEffect, useState } from "react";
import { errorNotification, infoNotification } from "../../utils/notification.util";
import { fileUpload } from "../../api/uploadDoc.api";
import { DefaultOptionType } from "antd/es/select";
import { TreeSelectProps } from "antd";
import { deleteFile, getAllFoldersNFiles } from "../../api/legacy.api";
import { getIdByType } from "../../utils/service.util";
import useDetailStore from "../../store/useStore";

const useNotesMain = (type: any) => {

    const typeId = getIdByType(type)

    const { userDetails } = useDetailStore();

    const [isAddButton, setisAddButton] = useState(false);
    const [allNotes, setAllNotes] = useState<any>([])
    const [title, setTitle] = useState("")
    const [htmlContent, sethtmlContent] = useState("");
    const [isEditMode, setEditMode] = useState(false)
    const [tags, setTags] = useState([])
    const [value, setVal] = useState("")
    const [isNotesLoading, setNotesLoading] = useState(false);
    const [selectedPreview, setSelectedPreview] = useState();
    const [isPreview, setIsPreview] = useState(false);
    const [isNoteSubmitting, setNoteSubmitting] = useState(false)
    const [treeData, setTreeData] = useState<Omit<DefaultOptionType, "label">[]>(
        [
            {
                id: 1,
                pId: null,
                value: 1,
                title: "Home",
                isLeaf: false,
            }
        ]
    );
    const [searchVal, setSearchVal] = useState();


    const handleChangeSearch = (e) => {
        setSearchVal(e.target.value)
    }
    const goBackPreview = () => {
        setIsPreview(false)
        setSelectedPreview({})
        setisAddButton(false)
    }

    const handleOnChange = (data: any) => {
        setVal(data)
    }

    const handleSelectedPreview = (data: any) => {
        setIsPreview(true)
        setSelectedPreview(data)
    }

    const handleChangeTags = (tags: any) => {
        setTags(tags)
    }

    const handleAddNoteButton = () => {
        setisAddButton(true)
    }

    const handleChangeTitle = (e: any) => {
        setTitle(e.target.value)
    }
    const handleRichTextHtml = (html: any) => {
        sethtmlContent(html)
    }

    // const handleEditMode = (fileId) => {
    //     const selectedNote = allNotes?.find((data: any) => data?.fileId == fileId)
    //     if (selectedNote?.fileContent) {
    //         sethtmlContent(selectedNote?.fileContent)
    //         setisAddButton(true)
    //     }
    //     setEditMode(true)
    // }

    const handleBack = () => {
        setisAddButton(false)
    }


    const handleDeleteFile = async (fileId: number, type: string) => {
        const updatedFolders = allNotes?.filter(data => data?.fileId !== fileId)
        setAllNotes(updatedFolders)

        try {
            const res = await deleteFile("Files", fileId)

        } catch (error) {
            console.log(error)
        }
    }


    const onLoadData: TreeSelectProps["loadData"] = ({ id }) =>
        new Promise(async (resolve) => {
            await fetchFolderNFiles(id, false);
        });

    const fetchFolderNFiles = async (folderId: any, initialLoad: boolean) => {
        try {
            const res = await getAllFoldersNFiles(folderId);
            if (res?.folderId) {
                const newFolders = res?.subFolders
                    ? res?.subFolders?.map((data: any) => {
                        return { ...data, parentId: folderId };
                    })
                    : [];

                const folderNFiles = [...newFolders];

                const formatToTreeStructure = folderNFiles?.map((data: any) => {
                    const obj = {
                        id: data?.folderId ? data?.folderId : "",
                        pId: folderId,
                        value: data?.folderId ? data?.folderId : "",
                        title: data?.folderName,
                        isLeaf: false,
                    };

                    return obj;
                });
                if (initialLoad) {
                    // setTreeData(formatToTreeStructure);
                    setTreeData(treeData.concat(formatToTreeStructure));
                    setVal(1)
                } else {
                    setTreeData(treeData.concat(formatToTreeStructure));
                }
            } else {
                errorNotification("Something went wrong")
            }

        } catch (error) {
            console.log(error);

            errorNotification("Something went wrong")
        }
    };


    const fetchAllFiles = async () => {
        setNotesLoading(true)
        try {
            const res = await getAllFoldersNFiles(value)
            if (res?.folderId) {
                const newFiles = res?.files || []
                const allNotesOfType = newFiles?.filter((data: any) => data?.typeName == type)
                setAllNotes(allNotesOfType)
            }
            setNotesLoading(false)
        } catch (error) {
            setNotesLoading(false)
            errorNotification("Something went wrong")

        }
    }


    const handleSubmit = async () => {
        console.log({ value, htmlContent, title })
        if (!value || !htmlContent?.length || !title?.length) {
            infoNotification("Please Enter All the Details.")
            return
        }

        setNoteSubmitting(true)
        try {
            const params = {
                FolderId: value == "Home" ? 1 : value,
                TagData: tags.join(","),
                TypeId: typeId,
                FileContent: htmlContent,
                Title: title,
                CreatedBy: userDetails?.id
            }

            // for (const [index, file] of Object.entries(selectedFileList)) {

            const formData = new FormData();
            //     formData.append('UploadedDocument', file.originFileObj
            //     );
            const data: any = await fileUpload(formData, params)
            const res = data?.data || {}

            if (data?.status == 201) {
                setAllNotes([{ ...res }, ...allNotes])
                setisAddButton(false)
                sethtmlContent("")
                setTitle("")
                setTags([])
            } else {
                errorNotification("Something went wrong!")
            }
            setNoteSubmitting(false)
        } catch (error) {
            setNoteSubmitting(false)
            setisAddButton(false)
            errorNotification("Something went wrong")
        }
    }

    useEffect(() => {
        fetchFolderNFiles(1, true);
    }, []);

    useEffect(() => {
        if (value && value !== "Home") {
            fetchAllFiles()
        }
    }, [value])

    let filteredNotes = allNotes

    if (searchVal) {
        filteredNotes = allNotes?.filter((data: any) => data?.title?.toLowerCase().includes(searchVal))
    }

    return {
        handleAddNoteButton,
        handleChangeTags,
        tags,
        isAddButton, handleRichTextHtml, handleSubmit, handleBack, allNotes: filteredNotes, handleChangeTitle, title, htmlContent,
        value, handleOnChange,
        treeData,
        onLoadData,
        isPreview,
        goBackPreview,
        handleSelectedPreview,
        selectedPreview,
        handleDeleteFile,
        isNoteSubmitting,
        isNotesLoading,
        handleChangeSearch,
        searchVal,
    }
}

export default useNotesMain