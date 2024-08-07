import { useState } from "react";
import { errorNotification } from "../../utils/notification.util";
import { fileUpload } from "../../api/uploadDoc.api";

const useNotesMain = (type: any) => {

    const [isAddButton, setisAddButton] = useState(false);

    const [htmlContent, sethtmlContent] = useState();
    const handleAddNoteButton = () => {
        setisAddButton(true)
    }


    const handleRichTextHtml = (html: any) => {
        sethtmlContent(html)
    }


    const handleSubmit = async () => {

        try {

            const params = {
                FolderId: 1,
                TagData: "Hello",
                TypeId: "",
                FileContent: htmlContent
            }

            // for (const [index, file] of Object.entries(selectedFileList)) {

            const formData = new FormData();
            //     formData.append('UploadedDocument', file.originFileObj
            //     );

            const res = await fileUpload(formData, params)

            //     if (res?.fileId) {
            //         newList.push(res)
            //     }
            // }

        } catch (error) {
            errorNotification("Something went wrong")
        }

    }


    const handleBack = () => {
        setisAddButton(false)
    }

    return { handleAddNoteButton, isAddButton, handleRichTextHtml, handleSubmit, handleBack }
}

export default useNotesMain