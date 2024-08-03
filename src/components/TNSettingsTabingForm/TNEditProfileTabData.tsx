import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Col, Modal, Row, UploadFile, UploadProps } from 'antd';
import { TNUpload } from '../common/TNUpload/TNUpload';
import { TNInput } from '../common/TNInput/TNInput';
import { TNButton } from '../common/TNButton/TNButton';
// Make sure to adjust the import path according to your file structure

// file upload js start
const getBase64 = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
// file upload js end
export const TNEditProfileTabData = () => {
    // file upload js start
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [previewVisible, setPreviewVisible] = useState<boolean>(false);
    const [previewImage, setPreviewImage] = useState<string>('');
    const [previewTitle, setPreviewTitle] = useState<string>('');
  
    const handlePreview = async (file: UploadFile) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as Blob);
      }
  
      setPreviewImage(file.url || (file.preview as string));
      setPreviewVisible(true);
      setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };
  
    const handleChange: UploadProps['onChange'] = ({ fileList }) => {
      setFileList(fileList);
    };
    const uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    // file upload js end
    // input js start
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    // input js end
    return(
        <>
            <h4 className="fw-600">Edit Profile</h4>
            <div className='mt-5 flex items-center gap-7'>
                  {/* // file upload js start */}
                <TNUpload
                    fileList={fileList}
                    handlePreview={handlePreview}
                    handleChange={handleChange}
                    uploadButton={uploadButton}
                />
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={() => setPreviewVisible(false)}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                {/*  // file upload js end */}
                <h4 className='fw-500'>Jon Singh</h4>
            </div>
            <Row gutter={24} className='mt-8'>
                <Col xs={24} xl={12} xxl={8}>
                    <Row>
                        <Col xs={24}>
                            <TNInput
                                id="df-display-name"
                                datatestid="df-display-name-testid"
                                type="text"
                                name="dfdisplay-name"
                                // value={inputValue}
                                label="Display Name"
                                placeholder="Enter your display name"
                                ILInputLabelClass=""
                                handleChange={handleInputChange}
                                textAreaShow={false}
                                readOnly={false}
                                errorMsg=""
                                />
                        </Col>
                        <Col xs={24} className="flex gap-4 mt-1">
                            <TNButton
                                id="create"
                                datatestid="create-testid"
                                type="button"
                                ILBtnClass="w-full"
                                handleChange={() => {return false}}
                                disabled={false}
                                >
                                    Save
                            </TNButton>
                            <TNButton
                            id="create"
                            datatestid="create-testid"
                            type="button"
                            ILBtnClass="w-full btn-transparent"
                            handleChange={() => {return false}}
                            disabled={false}
                            >
                                Cancel
                            </TNButton>
                        </Col>
                    </Row>
                </Col>
               
            
            </Row>
        </>
    )
}