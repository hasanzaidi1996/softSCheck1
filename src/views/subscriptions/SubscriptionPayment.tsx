import { getSubscriptions } from 'appRedux/actions/subscriptionAction';
import { SubscriptionSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SubscriptionCard from './SubscriptionCard';
import { ISubscription } from 'types/ReduxTypes/subscription';

/**
 * SubscriptionPayment is a component that displays a modal to add or edit a user
 * depending on the value of `isEdit`. The modal displays a form with fields
 * for first name, last name, email, and role. The form is handled by the `onFinish`
 * and `onFinishFailed` functions. The modal has a cancel button and a submit
 * button. If the user clicks the cancel button, the modal is closed. If the
 * user clicks the submit button, the `onFinish` function is called with the
 * form values as an argument. If the form is invalid, the `onFinishFailed`
 * function is called with the form values as an argument.
 */
const SubscriptionPayment = () => {
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
  return (
    <div className="container p-8 rounded-lg bg-tertiary">
      <h1 className="text-2xl my-4 capitalize">Payment</h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
        {subscriptions && (
          <div className="flex flex-col items-center justify-center xl:col-span-1">
            <SubscriptionCard subscription={subs as ISubscription} hasButton={false} />
          </div>
        )}
        <div className="flex flex-col items-center w-full gap-4 bg-gray-200 p-4 rounded-lg xl:col-span-2">
          <h1 className="text-xl font-semibold">Payment Breakdown</h1>
          <div className="flex justify-between items-center w-full text-lg font-medium">
            <h1>Subscription Cost</h1>
            <p>$ {subs?.price}</p>
          </div>
          <div className="flex justify-between items-center w-full text-lg font-medium">
            <h1>Total Tax</h1>
            <p>$ 0</p>
          </div>
          <div className="h-0.5 w-full bg-primary"></div>
          <div className="flex justify-between items-center w-full text-lg font-bold">
            <h1>Total Amount</h1>
            <p>$ {subs?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPayment;
