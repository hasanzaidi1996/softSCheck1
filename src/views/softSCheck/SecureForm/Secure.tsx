import { Button, Form, Radio } from 'antd';
import React from 'react';

const Secure = ({
  secureQuestions,
  setActive,
  setActiveStep
}: {
  secureQuestions: string[];
  setActive: any;
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
    setActive('Update');
  };
  return (
    <Form
      layout="vertical"
      form={form}
      name="check-compliance"
      onFinish={onFinish}
      className="flex flex-col gap-2">
      {secureQuestions.map((question, index) => (
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
        <Button type="primary" className="rounded-md w-24" onClick={() => setActiveStep(1)}>
          Back
        </Button>
        <Button type="primary" htmlType="submit" className="rounded-md bg-blue-500 border-0 w-24">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default Secure;
