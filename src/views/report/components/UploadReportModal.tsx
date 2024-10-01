import { CheckCircleTwoTone, CloseCircleTwoTone, CloudUploadOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { uploadReports } from 'appRedux/actions/reportAction';
import { useAppDispatch } from 'appRedux/store';
import { FileUploader } from 'components';
import React, { useState } from 'react';

/**
 * Modal to upload report
 *
 * @returns {React.FC<IUploadModalProps>} modal to render
 */
const UploadReportModal: React.FC = () => {
  const [file, setFile] = useState<UploadFile | null>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  /**
   * Close the modal safely
   */
  // const closeModal = () => {
  //   setFile(null);
  //   props.setOpen(false);
  // };

  /**
   *
   */
  const submitReport = async () => {
    if (file) {
      setLoading(true);
      const status = await dispatch(uploadReports({ file: file as RcFile })).unwrap();
      // if successfully uploaded close the modal
      if (status) {
        // closeModal();
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
  const { Panel } = Collapse;
  //   const text = `
  //   A dog is a type of domesticated animal.
  //   Known for its loyalty and faithfulness,
  //   it can be found as a welcome guest in many households across the world.
  // `;
  const accordianData = [
    {
      key: 0,
      title: 'https://applycyber.net/v1/api/submit-logs',
      request: [
        'POST /submitLogs HTTP/1.1',
        'Host: api.example.com',
        'Content-Type: application/json',
        'Content-Length: 123',
        'Authorization: Bearer your-auth-token',
        'User-Agent: Mozilla/5.0 (compatible; ExampleClient/1.0)',
        'Accept: application/json',
        'Connection: keep-alive'
      ],
      requestData: {
        EventID: 1,
        EventName: 'Process Create',
        UtcTime: '2024-10-01T12:34:56.789Z',
        ProcessGuid: '{b7a2f671-3b22-5d7a-0000-00105e301000}',
        ProcessId: 6548,
        Image: 'C:\\Windows\\System32\\cmd.exe',
        FileVersion: '10.0.19041.1 (WinBuild.160101.0800)',
        Description: 'Windows Command Processor',
        CommandLine: 'cmd.exe /c dir',
        CurrentDirectory: 'C:\\Users\\User\\',
        User: 'DESKTOP-1234ABC\\User',
        LogonGuid: '{83e4f12b-46c5-5f1a-0000-002083320500}',
        LogonId: '0x332083',
        TerminalSessionId: 1,
        IntegrityLevel: 'High',
        Hashes: 'SHA256=3F09C8F9B82FA93D42A144014C1085D9B7B423F55E59AD69C9A531E',
        ParentProcessGuid: '{b7a2f671-3b22-5d7a-0000-00105e301002}',
        ParentProcessId: 4321,
        ParentImage: 'C:\\Windows\\explorer.exe',
        ParentCommandLine: 'C:\\Windows\\explorer.exe',
        ParentUser: 'DESKTOP-1234ABC\\User',
        ParentLogonGuid: '{8d7d5612-5b46-5f1a-0000-002083320700}',
        ParentLogonId: '0x432083'
      },

      response: ['HTTP/1.1 200 OK', 'Content-Type: application/json', 'Content-Length: 85'],
      responseData: {
        status: 'success',
        message: 'Log submitted successfully',
        logId: '12345'
      }
    },
    {
      key: 1,
      title: 'https://applycyber.net/v1/api/validate-auth',
      request: [
        'GET /validate-auth HTTP/1.1',
        'Host: api.example.com',
        'Content-Type: application/json',
        'Content-Length: 123',
        'Authorization: Bearer your-auth-token',
        ' User-Agent: Mozilla/5.0 (compatible; ExampleClient/1.0)',
        'Accept: application/json',
        'Connection: keep-alive'
      ],
      response: ['HTTP/1.1 200 OK', 'Content-Type: application/json', 'Content-Length: 85'],
      responseData: {
        status: 'success',
        message: 'You are logged authenticated',
        username: 'admin'
      }
    },
    {
      key: 2,
      title: 'https://applycyber.net/v1/api/recent-log-status',
      request: [
        'GET /recent-log-status HTTP/1.1',
        'Host: api.example.com',
        'Content-Type: application/json',
        'Content-Length: 123',
        'Authorization: Bearer your-auth-token',
        'User-Agent: Mozilla/5.0 (compatible; ExampleClient/1.0)',
        'Accept: application/json',
        'Connection: keep-alive'
      ],
      response: ['HTTP/1.1 200 OK', 'Content-Type: application/json', 'Content-Length: 85'],
      responseData: {
        logId: '1234',
        date: '2024-10-12',
        status: 'submitted',
        processingStatus: 'pending'
      }
    }
  ];
  return (
    // <Modal
    //   open={props.open}
    //   title="Upload Report"
    //   onCancel={closeModal}
    //   footer={[
    //     <Button key="submit" type="primary" loading={loading} onClick={submitReport}>
    //       Submit
    //     </Button>
    //   ]}>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
      <div className="flex flex-col gap-4">
        {/* <Space>
      <InfoCircleTwoTone twoToneColor={'#fcbc3e'} style={{ fontSize: 25 }} />
      <Typography.Text type="warning">
        Download the template by clicking the button, fill out the required fields properly and
        upload it
      </Typography.Text>
      <Button
        onClick={() => {
          dispatch(getTemplate());
        }}
        icon={<DownloadOutlined />}>
        Download Template
      </Button>
    </Space> */}
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

        <Button
          key="submit"
          type="primary"
          className="rounded-md flex items-center justify-center"
          loading={loading}
          onClick={submitReport}
          icon={<CloudUploadOutlined />}>
          Submit
        </Button>
      </div>
      <div>
        <Collapse accordion defaultActiveKey={0}>
          {accordianData?.map((item, index) => {
            return (
              <Panel
                header={item.title}
                key={index}
                extra={
                  item.responseData?.status === 'success' ? (
                    <CheckCircleTwoTone twoToneColor={'#52c41a'} />
                  ) : (
                    <CloseCircleTwoTone twoToneColor={'#eb2f96'} />
                  )
                }>
                <div>
                  <div className="max-h-44 overflow-auto">
                    <div>
                      <div>
                        <Typography.Text type="secondary">Request</Typography.Text>
                        {item?.request.map((req, index) => {
                          return (
                            <div key={index}>
                              <Typography.Text>{req}</Typography.Text>
                            </div>
                          );
                        })}
                      </div>
                      {item?.requestData && (
                        <div>
                          <Typography.Text type="secondary">Request Data</Typography.Text>

                          <pre>{JSON.stringify(item?.requestData, null, 2)}</pre>
                        </div>
                      )}
                    </div>
                    <div>
                      <div>
                        <Typography.Text type="success">Response</Typography.Text>
                        {item?.response.map((res, index) => {
                          return (
                            <div key={index}>
                              <Typography.Text>{res}</Typography.Text>
                            </div>
                          );
                        })}
                      </div>

                      <div>
                        <Typography.Text type="success">Response Data</Typography.Text>
                        {item?.responseData && (
                          <pre>{JSON.stringify(item?.responseData, null, 2)}</pre>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </div>
    // </Modal>
  );
};

export default UploadReportModal;
