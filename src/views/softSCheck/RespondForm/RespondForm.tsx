import { Button, Form, Radio } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * RespondForm
 *
 * A form for responding to a softSCheck checkup
 *
 * @returns {React.ReactElement} The rendered form
 */
const RespondForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  /**
   * Called when the form is submitted.
   *
   * Logs the answers to the console.
   * @param {Object} values - The values of the form fields.
   */
  const onFinish = (values: any) => {
    console.log(values);
    navigate('/check-compliance-dashboard');
  };
  const incidentQuestions = [
    'Is there an incident response plan in place to address potential cybersecurity threats?',
    'Do employees know how to report security incidents?',
    'Do you have a team responsible for investigating and responding to security breaches?',
    'Are incidents regularly reviewed to learn from past events and improve response strategies?',
    'Is there a process in place to notify relevant stakeholders (e.g., customers, regulators) in case of a data breach?'
  ];
  return (
    <div className="container bg-white rounded-lg p-6">
      <div className="flex flex-col gap-2 my-4">
        <h1 className="text-2xl">Incident Response</h1>
        <p>Be ready to detect, respond to, and recover from cybersecurity incidents</p>
      </div>
      <Form
        layout="vertical"
        form={form}
        name="check-compliance"
        onFinish={onFinish}
        className="flex flex-col gap-2">
        {incidentQuestions.map((question, index) => (
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
            Complete
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RespondForm;
