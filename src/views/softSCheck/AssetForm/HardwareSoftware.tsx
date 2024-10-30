import { Button, Form, Radio } from 'antd';
/**
 * A form component for asking questions about people's roles and responsibilities
 *
 * Renders a set of questions as Form.Item's, with a Radio.Group for each question
 * for the user to select Yes, No, or Partially. The answers are sent to the
 * onFinish function when the form is submitted.
 *
 * @returns A JSX element representing the form
 */
const HardwareSoftware = ({
  hardwareSoftware,
  setActiveStep
}: {
  hardwareSoftware: string[];
  setActiveStep: any;
}) => {
  const [form] = Form.useForm();

  /**
   * Called when the form is submitted.
   *
   * Logs the answers to the console.
   * @param {Object} values - The values of the form fields.
   */
  const onFinish = (values: any) => {
    console.log(values);
    setActiveStep(2);
  };
  return (
    <Form
      layout="vertical"
      form={form}
      name="check-compliance"
      onFinish={onFinish}
      className="flex flex-col gap-2">
      {hardwareSoftware.map((question, index) => (
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
        <Button type="primary" className="rounded-md w-24" onClick={() => setActiveStep(0)}>
          Back
        </Button>
        <Button type="primary" htmlType="submit" className="rounded-md bg-blue-500 border-0 w-24">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default HardwareSoftware;
