import { Button, Form, Radio } from 'antd';

/**
 * A simple component that renders a div with the text "UpdateForm".
 *
 * @returns {JSX.Element} A JSX element containing the UpdateForm text.
 */
const UpdateForm = ({ setActive }: { setActive: any }) => {
  const [form] = Form.useForm();

  /**
   * Called when the form is submitted.
   *
   * Logs the answers to the console.
   * @param {Object} values - The values of the form fields.
   */
  const onFinish = (values: any) => {
    console.log(values);
    setActive('Backup');
  };
  const softwareUpdatesQuestions = [
    'Is there a defined policy for applying security patches and software updates across the organization?',
    'Are critical patches applied within a defined timeframe (e.g., within 30 days)?',
    'Are automatic updates enabled for all systems and devices, where feasible?',
    'Is there a process in place to track and verify that patches and updates are installed?',
    'Are unsupported software versions removed or upgraded to a supported version?'
  ];
  return (
    <div className="container bg-white rounded-lg p-6">
      <div className="flex flex-col gap-2 my-4">
        <h1 className="text-2xl">Update Software</h1>
        <p>Update software on all systems and devices</p>
      </div>
      <Form
        layout="vertical"
        form={form}
        name="check-compliance"
        onFinish={onFinish}
        className="flex flex-col gap-2">
        {softwareUpdatesQuestions.map((question, index) => (
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

export default UpdateForm;
