import { Form, TreeSelectProps } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { useEffect, useState } from "react";
import { deleteFile, getAllFoldersNFiles, initialGetAllFolders } from "../../api/legacy.api";
import { EditFile, fileUpload } from "../../api/uploadDoc.api";
import useDetailStore from "../../store/useStore";
import { errorNotification, infoNotification } from "../../utils/notification.util";
import { getIdByType } from "../../utils/service.util";
import { useSearchParams } from "react-router-dom";
import notesStore from "../../store/notes.store";

const useNotesMain = (type: any) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const currentTab = searchParams.get("selected-tab")
    const typeId = getIdByType(type)
    const { notesFolderParams, setNotesFolderParams } = notesStore();
    const { userDetails } = useDetailStore();
    const [notesForm] = Form.useForm();

    const [isAddButton, setisAddButton] = useState(false);
    const [allNotes, setAllNotes] = useState<any>([])
    const [title, setTitle] = useState("")
    const [htmlContent, sethtmlContent] = useState("");
    const [tags, setTags] = useState([])
    const [value, setVal] = useState("Select Folder")
    const [isNotesLoading, setNotesLoading] = useState(false);
    const [selectedPreview, setSelectedPreview] = useState();
    const [isPreview, setIsPreview] = useState(false);
    const [isNoteSubmitting, setNoteSubmitting] = useState(false)
    const [treeData, setTreeData] = useState<Omit<DefaultOptionType, "label">[]>(
        [

        ]
    );
    const [searchVal, setSearchVal] = useState();
    const [isEditMode, setisEditMode] = useState(false);
    const [selectedFileForEdit, setselectedFileForEdit] = useState();




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
        searchParams.set("selected-folder", data)
        setSearchParams(searchParams)
        setNotesFolderParams({
            ...notesFolderParams,
            currentTab: data
        })
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
        if (isEditMode) {
            notesForm.resetFields()
            setisEditMode(false)
            sethtmlContent("")
            setTags([])
            setselectedFileForEdit({})
        }
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
            const res = await fetchFolderNFiles(id, false);
            resolve(res);
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


                setTreeData(treeData.concat(formatToTreeStructure));
                return
            } else {
                errorNotification("Something went wrong")
            }

        } catch (error) {
            console.log(error);

            errorNotification("Something went wrong")
        }
    };


    const initialFolderFetch = async () => {
        try {
            const res = await initialGetAllFolders();
            if (res?.status == 200) {
                const data = res.data || []


                const formatToTreeStructure = data?.map((data: any) => {
                    const obj = {
                        id: data?.folderId ? data?.folderId : "",
                        pId: null,
                        value: data?.folderId ? data?.folderId : "",
                        title: data?.folderName,
                        isLeaf: false,
                    };

                    return obj;
                });

                setTreeData(treeData.concat(formatToTreeStructure));

                const storedSelectedFolder = notesFolderParams[currentTab] || null

                console.log({ notesFolderParams })
                let selectedFolder = ""
                if (storedSelectedFolder) {
                    setVal(storedSelectedFolder)
                    selectedFolder = storedSelectedFolder
                } else if (searchParams.get("selected-folder")) {
                    const selectedFolderFromParams = searchParams.get("selected-folder")
                    setVal(selectedFolderFromParams)
                    selectedFolder = selectedFolderFromParams
                } else {
                    setVal(formatToTreeStructure?.[0]?.value)
                    searchParams.set("selected-folder", formatToTreeStructure?.[0]?.value)
                    setSearchParams(searchParams)
                    selectedFolder = formatToTreeStructure?.[0]?.value
                }

                setNotesFolderParams({
                    ...notesFolderParams,
                    currentTab: selectedFolder
                })
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


    const handleSubmit = async (values: any) => {

        if (!htmlContent?.length) {
            infoNotification("Please Add Content!")
            return
        }

        if (value == "Select Folder") {
            infoNotification("Please select the folder.")
            return
        }

        console.log({ isEditMode })

        if (isEditMode) {
            editNote(values)
            return
        }

        createNote(values)
    }

    const editNote = async (values: any) => {

        setNoteSubmitting(true)
        console.log({ values })
        console.log({ selectedFileForEdit })

        const params = {
            id: selectedFileForEdit?.fileId,
            FileId: selectedFileForEdit?.fileId,
            TypeId: typeId,
            Title: values?.title,
            FileContent: htmlContent,
            TagData: tags?.length ? tags.join(",") : null,
            FileVersionId: selectedFileForEdit?.fileVersionId
        }

        const formData = new FormData();

        try {
            const res: any = await EditFile(formData, params)

            // selectedFileForEdit

            console.log({ res })
            if (res?.status == 200) {
                const dataRes = res?.data || {}

                const updatedNotes = allNotes?.map((data: any) => {
                    if (data?.fileId == selectedFileForEdit?.fileId) {
                        return { ...dataRes }

                    }
                    return data
                })

                setAllNotes(updatedNotes)
                setisAddButton(false)
                setisEditMode(false)
                setselectedFileForEdit({})
                sethtmlContent("")
                notesForm.resetFields()
                setTags([])
            } else {
                errorNotification("Something went wrong!")
            }
            setNoteSubmitting(false)
        } catch (error) {
            console.log(error)
            errorNotification("Something went wrong!")
            setNoteSubmitting(false)
            throw error
        }
    }

    const createNote = async (values: any) => {
        setNoteSubmitting(true)

        try {
            const params = {
                FolderId: values?.value,
                TagData: tags.join(","),
                TypeId: typeId,
                FileContent: htmlContent,
                Title: values?.title,
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
                notesForm.resetFields()
                sethtmlContent("")
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

    const handleEditFile = (currentId: any) => {

        const getSelectedNote = allNotes?.find((data: any) => data?.fileId == currentId)

        if (getSelectedNote?.fileId) {
            setselectedFileForEdit(getSelectedNote)
            setisEditMode(true)
            setisAddButton(true)
            notesForm.setFieldsValue({ title: getSelectedNote?.title })
            sethtmlContent(getSelectedNote?.fileContent)
            setTags(getSelectedNote?.tagData ? getSelectedNote?.tagData?.split(",") : [])
        }
    }

    useEffect(() => {
        initialFolderFetch();
    }, [type]);


    // const currentFolder = searchParams.get("slect")
    useEffect(() => {
        if (value && value !== "Select Folder") {
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
        notesForm,
        handleEditFile,
        isEditMode
    }
}

export default useNotesMain