import { Button, Form, Input, message } from 'antd';
import { getSubscriptions } from 'appRedux/actions/subscriptionAction';
import { SubscriptionSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ISubscription } from 'types/ReduxTypes/subscription';
import SubscriptionCard from './SubscriptionCard';

/**
 * SubscriptionContact is a component that displays a modal to add or edit a user
 * depending on the value of `isEdit`. The modal displays a form with fields
 * for first name, last name, email, and role. The form is handled by the `onFinish`
 * and `onFinishFailed` functions. The modal has a cancel button and a submit
 * button. If the user clicks the cancel button, the modal is closed. If the
 * user clicks the submit button, the `onFinish` function is called with the
 * form values as an argument. If the form is invalid, the `onFinishFailed`
 * function is called with the form values as an argument.
 */
const SubscriptionContact = () => {
  const [form] = Form.useForm();

  const params = useParams();
  const { id } = params;
  console.log(id);
  const dispatch = useAppDispatch();
  const { subscriptions, subscriptionLoading } = useSelector(SubscriptionSelector);
  useEffect(() => {
    if (!subscriptions && subscriptionLoading) {
      dispatch(getSubscriptions());
    }
  }, [subscriptions]);
  const subs = subscriptions?.filter((sub) => sub._id === id)[0];

  /**
   * Called when the form is submitted successfully.
   *
   * Logs a success message with the submitted values to the console.
   * @param {Object} values - The values of the form fields.
   */
  const onFinish = (values: any) => {
    message.success({
      content: 'Thank you for connecting to our platform. We will reach out to you shortly.',
      duration: 5,
      style: {
        marginTop: '10vh'
      }
    });
    form.resetFields();
  };

  /**
   * Called when the form is not submitted successfully.
   *
   * Logs an error message with the error information to the console.
   * @param {Object} errorInfo - The error information of the form.
   */
  const onFinishFailed = (errorInfo: any) => {
    message.error({
      content: 'Something went wrong. Please try again.',
      duration: 5,
      style: {
        marginTop: '10vh'
      }
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:space-y-16 space-y-4">
      <div className="bg-secondary md:p-10 p-6 w-full text-primary">
        <div className="container flex gap-4">
          {/* <img src={LogoMark} alt="logo" className="size-20" /> */}
          <div className="space-y-4">
            <h1 className="md:text-6xl text-3xl font-semibold text-primary md:leading-snug">
              Connect with us
            </h1>
            <p className="md:text-xl text-lg font-semibold md:leading-snug ">
              We would love to hear from you. Please fill out the form below to get started.
            </p>
          </div>
        </div>
      </div>
      <div className="container p-8 rounded-lg bg-tertiary">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {subscriptions && (
            <div className="flex flex-col items-center justify-center xl:col-span-1">
              <SubscriptionCard subscription={subs as ISubscription} hasButton={false} />
            </div>
          )}
          <div className="xl:col-span-2 container bg-primary p-4 rounded-lg ring-1 ring-secondary">
            <Form
              form={form}
              layout="vertical"
              size="large"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4">
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name!' }]}>
                  <Input placeholder="Enter your full name" className="w-full rounded-md" />
                </Form.Item>
                <Form.Item
                  label="Organization Name"
                  name="organization"
                  rules={[{ required: true, message: 'Please enter your organization name!' }]}>
                  <Input placeholder="Enter you organization name" className="w-full rounded-md" />
                </Form.Item>
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}>
                  <Input placeholder="Enter your email" className="w-full rounded-md" />
                </Form.Item>
                <Form.Item
                  label="Contact Number"
                  name="contact"
                  rules={[{ required: true, message: 'Please enter your contact number!' }]}>
                  <Input
                    placeholder="Enter your contact number"
                    className="w-full rounded-md"
                    type="number"
                  />
                </Form.Item>
              </div>
              <Form.Item
                label="Your Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message!' }]}>
                <Input.TextArea placeholder="Enter your message" className="w-full rounded-md" />
              </Form.Item>
              <Form.Item className="w-full flex items-end justify-end">
                <Button className="w-full rounded-md" type="primary" htmlType="submit">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContact;
