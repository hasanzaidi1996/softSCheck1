import { Modal, Button, UploadFile, UploadProps } from 'antd';
import React, { useState } from 'react';
import { IUploadModalProps } from './types';
import { FileUploader } from 'components';
import { useAppDispatch } from 'appRedux/store';
import { getTemplate, uploadReports } from 'appRedux/actions/reportAction';
import { RcFile } from 'antd/lib/upload';

/**
 * Modal to upload report
 *
 * @param {IUploadModalProps} props props required
 * @returns {React.FC<IUploadModalProps>} modal to render
 */
const UploadReportModal: React.FC<IUploadModalProps> = (props: IUploadModalProps) => {
  const [file, setFile] = useState<UploadFile | null>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  /**
   * Close the modal safely
   */
  const closeModal = () => {
    setFile(null);
    props.setOpen(false);
  };

  /**
   *
   */
  const submitReport = async () => {
    if (file) {
      setLoading(true);
      const status = await dispatch(uploadReports({ file: file as RcFile })).unwrap();
      // if successfully uploaded close the modal
      if (status) {
        closeModal();
      }
      setLoading(false);
    }
  };

  /**
   * on change file uploader
   *
   * @param {UploadProps['onChange']} info - get file
   * @returns {void} change
   */
  const onChange: UploadProps['onChange'] = (info) => {
    if (info.file) {
      setFile(info.file);
    }
  };
  return (
    <Modal
      open={props.open}
      title="Title"
      onCancel={closeModal}
      footer={[
        <Button key="submit" type="primary" loading={loading} onClick={submitReport}>
          Submit
        </Button>
      ]}>
      <Button
        onClick={() => {
          dispatch(getTemplate());
        }}>
        Download Template
      </Button>
      <FileUploader
        draggerText={`Support for a single file upload or Drag and Drop file can be uploaded`}
        accept=".xlsx"
        dragger={true}
        preview={true}
        multiple={false}
        onChange={onChange}
        onRemove={() => {
          setFile(null);
        }}
        beforeUpload={() => {
          return false;
        }}
        fileList={file ? [file] : undefined}
        maxCount={1}
      />
    </Modal>
  );
};

export default UploadReportModal;
