import { Button, Form, Radio } from 'antd';

/**
 * Renders a form for creating a backup.
 *
 * @returns {React.ReactElement} The form for creating a backup.
 */
const BackupForm = ({ setActive }: { setActive: any }) => {
  const [form] = Form.useForm();
  /**
   * Called when the form is submitted.
   *
   * Logs the answers to the console.
   * @param {Object} values - The values of the form fields.
   */
  const onFinish = (values: any) => {
    console.log(values);
    setActive('Respond');
  };
  const backUpQuestions = [
    'Do you regularly back up critical business data?',
    'Are backups stored in a location separate from the primary data (e.g., offline or in a different physical location)?',
    'Is backup data encrypted both in transit and at rest?',
    'Do you regularly test your backup and recovery procedures to ensure they work?',
    'Are there documented policies around backup frequency, retention, and restoration processes?'
  ];
  return (
    <div className="container bg-white rounded-lg p-6">
      <div className="flex flex-col gap-2 my-4">
        <h1 className="text-2xl">Back Up Essential Data</h1>
        <p>Back up the organisation’s essential data and store them offline</p>
      </div>
      <Form
        layout="vertical"
        form={form}
        name="check-compliance"
        onFinish={onFinish}
        className="flex flex-col gap-2">
        {backUpQuestions.map((question, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-md">
            <Form.Item
              label={question}
              name={question}
              // rules={[{ required: true, message: 'Please answer this question' }]}
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
                <Radio value="partially">Partially</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        ))}

        <div className="flex items-end justify-end gap-4">
          <Button type="primary" htmlType="submit" className="rounded-md bg-blue-500 border-0 w-24">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BackupForm;
